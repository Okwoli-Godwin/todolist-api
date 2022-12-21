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
exports.Delete = exports.search = exports.update = exports.getall = exports.post = void 0;
const todolistmodel_1 = __importDefault(require("../model/todolistmodel"));
const post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, status } = req.body;
        const newtitle = yield todolistmodel_1.default.create({
            title, description, status
        });
        return res.status(201).json({
            message: "gotten successfully",
            data: newtitle
        });
    }
    catch (error) {
        return res.status(400).json({
            messgae: "an error occured",
            data: error
        });
    }
});
exports.post = post;
const getall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alllist = yield todolistmodel_1.default.find();
        return res.status(201).json({
            message: " All list gotten",
            data: alllist
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        });
    }
});
exports.getall = getall;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status } = req.body;
        const updated = yield todolistmodel_1.default.findByIdAndUpdate(req.params.id, { status }, { new: true });
        return res.status(201).json({
            message: "Updated",
            data: updated
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        });
    }
});
exports.update = update;
const search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querydata = req.query;
        const makesearch = yield todolistmodel_1.default.find(querydata);
        return res.status(201).json({
            message: "Search found",
            data: makesearch
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        });
    }
});
exports.search = search;
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const remove = yield todolistmodel_1.default.findByIdAndRemove(req.params.id);
        return res.status(201).json({
            message: "Data deleted",
            data: remove
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        });
    }
});
exports.Delete = Delete;
