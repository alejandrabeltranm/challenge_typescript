import { User } from '../interfaces/interface';

export function registerUserPromise(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomError = Math.random() < 0.5;
            if (randomError) {
                reject("Error registering user");
            } else {
                user.id = Math.floor(Math.random() * 1000);
                resolve(user);
            }
        }, 1000);
    });
}
