"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const api = supertest_1.default(app_1.default);
test('bad request returns 400', () => __awaiter(void 0, void 0, void 0, function* () {
    const requestBody = {
        foo: 'bar',
    };
    yield api.post('/analyze').send(requestBody).expect(400);
}));
test('correct request returns 200', () => __awaiter(void 0, void 0, void 0, function* () {
    const requestBody = {
        text: 'this is a correct format request',
    };
    const test = yield api.post('/analyze').send(requestBody);
    console.log(test.body);
    yield api
        .post('/analyze')
        .send(requestBody)
        .expect(200)
        .expect('Content-Type', /application\/json/);
}));
test('word count is right', () => __awaiter(void 0, void 0, void 0, function* () {
    const requestBody = {
        text: 'here are four words',
    };
    const result = yield api.post('/analyze').send(requestBody);
    expect(result.status).toEqual(200);
    expect(result.body.wordCount).toEqual(4);
}));
test('text length count is right', () => __awaiter(void 0, void 0, void 0, function* () {
    const requestBody = {
        text: 'text length without spaces is 44 and with spaces is 54',
    };
    const result = yield api.post('/analyze').send(requestBody);
    expect(result.status).toEqual(200);
    expect(result.body.textLength.withSpaces).toEqual(54);
    expect(result.body.textLength.withoutSpaces).toEqual(44);
}));
test('character count is right', () => __awaiter(void 0, void 0, void 0, function* () {
    const data = [
        {
            a: 4,
        },
        {
            e: 2,
        },
        {
            g: 2,
        },
        {
            i: 2,
        },
        {
            k: 2,
        },
        {
            n: 2,
        },
        {
            s: 2,
        },
        {
            t: 4,
        },
        {
            y: 4,
        },
    ];
    const requestBody = {
        text: 'testing testing yykaa yykaa',
    };
    const result = yield api.post('/analyze').send(requestBody);
    expect(result.status).toEqual(200);
    expect(result.body.characterCount).toEqual(data);
}));
