import { UserModel } from '../models';
import { v4 as uuid } from 'uuid';
import { User } from '../interfaces';

export const loginUser = async (email: string, type: string): Promise<{user: User}> => {
    const user = await UserModel.findOne({ email, type }).exec();
    if (user) {
        return {
            user
        }
    }
    return null;
}

export const createNewUser = async (data: Record<string, any>): Promise<{ user: User }> => {
    const user = new UserModel(data);
    user.id = uuid();
    const createdUser = await user.save();
    if (createdUser) {
        return {
            user: createdUser
        }
    }
    return null;
}

export const getUsers = async (type?: string): Promise<User[]> => {
    if (type) {
        return await UserModel.find({ type }).exec();
    }
    return null;
}

export const getUserByID = async (id: string): Promise<User> => {
    return await UserModel.findOne({ id }).exec();
}