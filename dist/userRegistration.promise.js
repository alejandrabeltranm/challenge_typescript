"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./interfaces/interface");
const promise_1 = require("./promise/promise");
const newUser = {
    id: 0,
    credential: "maria_beltran",
    password: "aleja#123",
    email: "maria_alejandra_b@hotmail.com",
    role: interface_1.Role.User
};
(0, promise_1.registerUserPromise)(newUser)
    .then((registeredUser) => {
    console.log("Usuario registrado correctamente:", registeredUser);
})
    .catch((error) => {
    console.error("Error al registrar usuario:", error);
});
