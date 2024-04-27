import { Role } from "../enums/enum";

export interface User {
    id: number;
    credential: string;
    password: string;
    email: string;
    role: Role;
}

export { Role };