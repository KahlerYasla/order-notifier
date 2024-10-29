import { createLogger, format, transports } from "winston"
import { Format } from "logform"

const { combine, timestamp, printf, colorize } = format

// Define a custom format for Winston logs
const customFormat: Format = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`
})

// Create a Winston logger instance with typings
const logger = createLogger({
    level: "info",
    format: combine(colorize(), timestamp(), customFormat),
    transports: [
        new transports.Console(),
        new transports.File({ filename: "app.log" }),
    ],
})

export default logger
