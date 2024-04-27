"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const interface_1 = require("./interfaces/interface");
const callbacks_1 = require("./callbacks/callbacks");
// Crea una interfaz para leer la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Función para registrar el usuario desde la consola
function registerUserFromConsole() {
    rl.question('Enter username: ', (credential) => {
        rl.question('Enter password: ', (password) => {
            rl.question('Enter email: ', (email) => {
                const newUser = {
                    id: 0,
                    credential,
                    password,
                    email,
                    role: interface_1.Role.User
                };
                // Llama a la función de registro con el usuario creado
                (0, callbacks_1.registerUserCallback)(newUser, (registeredUser) => {
                    console.log("User registered successfully:", registeredUser);
                    rl.close();
                }, (error) => {
                    console.error("Error registering user:", error);
                    rl.close();
                });
            });
        });
    });
}
// Inicia el registro de usuario desde la consola
registerUserFromConsole();
