"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserCallback = void 0;
function registerUserCallback(user, callback, errorCallback) {
    setTimeout(() => {
        const randomError = Math.random() < 0.5;
        if (randomError) {
            errorCallback("Error registering user");
        }
        else {
            user.id = Math.floor(Math.random() * 1000);
            callback(user);
        }
    }, 1000);
}
exports.registerUserCallback = registerUserCallback;
