import * as readline from 'readline';
import { User, Role } from './interfaces/interface';
import { registerUserCallback } from './callbacks/callbacks';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para registrar el usuario desde la consola
function registerUserFromConsole() {
    rl.question('Enter username: ', (credential) => {
        rl.question('Enter password: ', (password) => {
            rl.question('Enter email: ', (email) => {
                const newUser: User = {
                    id: 0,
                    credential,
                    password,
                    email,
                    role: Role.User
                };

                // Llama a la función de registro con el usuario creado
                registerUserCallback(newUser, (registeredUser) => {
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
