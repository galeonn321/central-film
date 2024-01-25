export interface User {
    username: string;
    email: string;
    password: string;
    token?: string;
}

export interface UserLogin{
    username: string;
    password: string;
    token?: string;
}