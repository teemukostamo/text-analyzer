"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const parser_1 = __importDefault(require("./src/controllers/parser"));
const logger_1 = __importDefault(require("./src/middleware/logger"));
const app = express_1.default();
app.use(express_1.default.json());
app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});
app.post('/analyze', (req, res) => {
    const { text } = req.body;
    if (!text) {
        res
            .status(400)
            .send('Please send a proper request: {"text": "your message here"}');
    }
    res.status(200).send(parser_1.default(text));
});
app.use(body_parser_1.default.json());
app.use(logger_1.default);
exports.default = app;
