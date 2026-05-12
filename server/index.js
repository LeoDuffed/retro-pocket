import express from "express";
import cors from "cors";
import { execFile } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { error } from "console";
import { stderr } from "process";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3001;
const SERIAL_PORT = "/dev/tty.usbserial-1120"; // esta puede cambiar (arreglar)

const FQBN = "MightyCore:avr:32:clock=8MHz_internal,BOD=2v7,eeprom=keep,LTO=Os_flto,pinout=standard,bootloader=uart0,baudrate=9600,JTAG=disabled";

const games = {
    snake: "snake/main.hex",
    breakout: "breakout/main.hex",
};

app.post("/api/upload/:slug", (req, res) => {
    const { slug } = req.params;
    const gameHex = games[slug];

    if(!gameHex){
        return res.status(404).json({ ok: false, message: "no encontrado" });
    }

    const hexPath = path.join(__dirname, "..", "games", gameHex);

    const args = [ "upload", "-b", FQBN, "-p", SERIAL_PORT, "-i", hexPath ];

    execFile("arduino-cli", args, { cwd: path.join(__dirname, "..") }, (error, stdout, stderr) => {
        if(error){
            return res.status(500).json({
                ok: false,
                message: "Error cargando juego",
                stdout,
                stderr,
            });
        }

        res.json({
            ok: true,
            message: "Juego cargado",
            stdout,
            stderr,
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor local listo en http://localhost:${PORT}`);
})

