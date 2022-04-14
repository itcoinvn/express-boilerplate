"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./utils/logger"));
dotenv_1.default.config();
const port = process.env.PORT || '3000';
const server = new http_1.default.Server(app_1.default);
server
    .listen(port, () => {
    logger_1.default.debug(`Started server on port ${port}`);
});
//# sourceMappingURL=server.js.map