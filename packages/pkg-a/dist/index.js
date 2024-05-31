"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = void 0;
/// <reference path="f1.ts"/>
/// <reference path="f2.ts"/>
require("A");
require("B");
exports.foo = { x: 1, y: 2 };
