// Importar a lib de logs
import winston from "winston";

// captura as propriedades de formatação dos logs
const {combine, printf, label, timestamp} = winston.format;

// Constroi o formato de exibição do logs
const myFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} ${label} ${level} ${message}`
})

// Construir o logger, que dispara o evento
global.loggers = winston.createLogger({
    level: "silly",
    transports: [new winston.transports.Console(), new winston.transports.File({filename: "my-delivery-api", level: 'error'})],
    format: combine(label({label: "my-delivery"}), timestamp, myFormat),
})














