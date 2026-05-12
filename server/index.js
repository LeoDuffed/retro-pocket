import express from "express";
import cors from "cors";
import { execFile } from "child_process";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3001;
const SERIAL_PORT_OVERRIDE = process.env.SERIAL_PORT?.trim();

const FQBN = "MightyCore:avr:32:clock=8MHz_internal,BOD=2v7,eeprom=keep,LTO=Os_flto,pinout=standard,bootloader=uart0,baudrate=9600,JTAG=disabled";

const games = {
    snake: "snake/main.hex",
    breakout: "breakout/main.hex",
    dodge: "dodge/main.hex",
    space: "space/main.hex",
    jump: "jump/main.hex",
};

let cachedSerialPort = null;

async function resolveSerialPort() {
    if (SERIAL_PORT_OVERRIDE) return SERIAL_PORT_OVERRIDE;

    if (cachedSerialPort) {
        try {
            await fs.access(cachedSerialPort);
            return cachedSerialPort;
        } catch {
            cachedSerialPort = null;
        }
    }

    const candidates = await listLikelySerialPorts();

    if (candidates.length === 0) {
        throw new Error(
            "No se encontró ningún puerto serial. Conecta el UART o define SERIAL_PORT=/dev/..."
        );
    }

    if (candidates.length > 1) {
        throw new Error(
            `Se encontraron varios puertos serial: ${candidates.join(
                ", "
            )}. Define SERIAL_PORT=/dev/... para seleccionar uno.`
        );
    }

    cachedSerialPort = candidates[0];
    return cachedSerialPort;
}

async function listLikelySerialPorts() {
    if (process.platform === "darwin") {
        return listFromDevEntries([
            { prefix: "cu.usbserial-", score: 0 },
            { prefix: "tty.usbserial-", score: 1 },
            { prefix: "cu.usbmodem", score: 2 },
            { prefix: "tty.usbmodem", score: 3 },
        ]);
    }

    if (process.platform === "linux") {
        return listFromDevEntries([
            { prefix: "ttyUSB", score: 0 },
            { prefix: "ttyACM", score: 1 },
        ]);
    }

    return [];
}

async function listFromDevEntries(prefixes) {
    let devEntries;
    try {
        devEntries = await fs.readdir("/dev");
    } catch {
        return [];
    }

    const matches = [];
    for (const entry of devEntries) {
        for (const { prefix, score } of prefixes) {
            if (entry.startsWith(prefix)) {
                matches.push({ entry, score });
                break;
            }
        }
    }

    // Deduplica pares cu./tty. en macOS (mismo dispositivo con dos nombres).
    const byDeviceKey = new Map();
    for (const match of matches) {
        const deviceKey = match.entry.replace(/^(cu\.|tty\.)/, "");
        const existing = byDeviceKey.get(deviceKey);
        if (!existing || match.score < existing.score) {
            byDeviceKey.set(deviceKey, match);
        }
    }

    return [...byDeviceKey.values()]
        .sort((a, b) => a.score - b.score || a.entry.localeCompare(b.entry))
        .map((m) => `/dev/${m.entry}`);
}

app.post("/api/upload/:slug", async (req, res) => {
    const { slug } = req.params;
    const gameHex = games[slug];

    if(!gameHex){
        return res.status(404).json({ ok: false, message: "no encontrado" });
    }

    const hexPath = path.join(__dirname, "..", "games", gameHex);

    let serialPort;
    try {
        serialPort = await resolveSerialPort();
    } catch (err) {
        return res.status(500).json({
            ok: false,
            message: err instanceof Error ? err.message : "No se pudo detectar el puerto serial",
        });
    }

    const args = [ "upload", "-b", FQBN, "-p", serialPort, "-i", hexPath ];

    execFile("arduino-cli", args, { cwd: path.join(__dirname, "..") }, (error, stdout, stderr) => {
        if(error){
            return res.status(500).json({
                ok: false,
                message: "Error cargando juego",
                serialPort,
                stdout,
                stderr,
            });
        }

        res.json({
            ok: true,
            message: "Juego cargado",
            serialPort,
            stdout,
            stderr,
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor local listo en http://localhost:${PORT}`);
})
