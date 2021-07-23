import { Document } from 'mongoose';

interface User extends Document {
    id: string;
    name: string;
    email: string;
    type: string;
}

export default User;