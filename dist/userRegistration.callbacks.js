"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./interfaces/interface");
const callbacks_1 = require("./callbacks/callbacks");
// Crea un usuario
const newUser = {
    id: 0,
    credential: "aleja.beltran",
    password: "beltran123#",
    email: "maria.beltran@sqasa.co",
    role: interface_1.Role.Admin
};
(0, callbacks_1.registerUserCallback)(newUser, (registeredUser) => {
    console.log("Usuario registrado correctamente:", registeredUser);
}, (error) => {
    console.error("Error al registrar usuario:", error);
});
