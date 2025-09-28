import { Types } from "mongoose";

export enum Role {
    ADMIN = "ADMIN",
}


export interface IUser {
    _id?: Types.ObjectId
    name: string;
    email: string;
    password?: string;
}