"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = process.env.port || 2033;
require("../config/db");
const todolistrouter_1 = __importDefault(require("../Router/todolistrouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("server", todolistrouter_1.default);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is working fine"
    });
});
app.listen(port, () => {
    console.log("Server is up and running");
});
