import mongoose, { Schema } from 'mongoose';
import { User } from '../interfaces';

const schema: Schema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
});

export default mongoose.model<User>('User', schema);