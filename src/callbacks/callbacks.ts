import { User, Role } from '../interfaces/interface';

export function registerUserCallback(user: User, callback: (user: User) => void, errorCallback: (error: any) => void): void {
    setTimeout(() => {
        const randomError = Math.random() < 0.5;
        if (randomError) {
            errorCallback("Error registering user");
        } else {
            user.id = Math.floor(Math.random() * 1000);
            callback(user);
        }
    }, 1000);
}