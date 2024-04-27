import { User, Role } from './interfaces/interface';
import { registerUserCallback } from './callbacks/callbacks';

// Crea un usuario
const newUser: User = {
    id: 0,
    credential: "aleja.beltran",
    password: "beltran123#",
    email: "maria.beltran@sqasa.co",
    role: Role.Admin
};


registerUserCallback(newUser, (registeredUser) => {
    console.log("Usuario registrado correctamente:", registeredUser);
}, (error) => {
    console.error("Error al registrar usuario:", error);
});