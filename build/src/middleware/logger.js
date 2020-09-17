"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, _res, next) => {
    console.log('Method:', req.method);
    console.log('Path:  ', req.path);
    console.log('Body:  ', req.body);
    console.log('---');
    next();
};
exports.default = logger;