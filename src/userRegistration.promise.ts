import { User, Role } from './interfaces/interface';
import { registerUserPromise } from './promise/promise';

const newUser: User = {
    id: 0,
    credential: "maria_beltran",
    password: "aleja#123",
    email: "maria_alejandra_b@hotmail.com",
    role: Role.User
};


registerUserPromise(newUser)
    .then((registeredUser) => {
        console.log("Usuario registrado correctamente:", registeredUser);
    })
    .catch((error) => {
        console.error("Error al registrar usuario:", error);
    });
