"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const list = new mongoose_1.default.Schema({
    task: String,
    status: String,
    description: String
});
exports.default = mongoose_1.default.model("todo", list);
