"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserPromise = void 0;
function registerUserPromise(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomError = Math.random() < 0.5;
            if (randomError) {
                reject("Error registering user");
            }
            else {
                user.id = Math.floor(Math.random() * 1000);
                resolve(user);
            }
        }, 1000);
    });
}
exports.registerUserPromise = registerUserPromise;
