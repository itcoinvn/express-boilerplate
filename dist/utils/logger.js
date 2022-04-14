"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    level: 'debug',
    format: winston_1.format.json(),
    defaultMeta: { service: 'my-project' },
    transports: [
        new winston_1.transports.File({ filename: path_1.default.join(__dirname, './logs/error.log'), level: 'error' }),
        new winston_1.transports.File({ filename: path_1.default.join(__dirname, './logs/combined.log') })
    ],
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston_1.transports.Console({
        format: winston_1.format.colorize({
            all: true
        }),
    }));
}
exports.default = logger;
//# sourceMappingURL=logger.js.map