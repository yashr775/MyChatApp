import { JwtPayload } from "jsonwebtoken";


interface Avatar {
    public_id:string,
    url:string
}

interface UserType {
    _id ?: string;
    name?:string;
    bio?:string,
    avatar?:Avatar;
    crteatedAt?:string
    updatedAt?:string
}


declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload & { _id: string }; // Adjust according to your JWT payload structure
        }
    }
}

export {UserType ,Avatar}