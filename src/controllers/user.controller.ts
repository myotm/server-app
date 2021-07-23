import  constants  from '../utils/constants';
import { createNewUser, getUsers, loginUser, getUserByID } from '../services';

//POST
export const login = async ( req: any, res: any ) => {
    const { email, type, } = req.body;
    const result = await loginUser(email, type);
    if (result) {
        return res.status(200).send({
            status: 200,
            message: constants.success,
            data: result
        });
    }
    return res.status(400).send({
        status: 400,
        message: constants.failed
    });
}

export const addNewUser = async (req: any, res: any) => {
    const result = await createNewUser(req.body);
    if (result) {
        return res.status(201).send({
            status: 201,
            message: constants.success,
            data: result
        });
    }
    return res.status(400).send({
        status: 400,
        message: constants.failed
    })
}

//GET
export const findUsersByType = async (req: any, res: any) => {
    const users = await getUsers(req.params.type);
    if (users) {
        return res.status(200).send({
            status: 200,
            message: constants.success,
            data: users
        });
    }
    return res.status(400).send({
        status: 400,
        message: constants.failed
    })
}

export const findAllUsers = async (req: any, res: any) => {
    const users = await getUsers();
    if (users) {
        return res.status(200).send({
            status: 200,
            message: constants.success,
            data: users
        });
    }
    return res.status(400).send({
        status: 400,
        message: constants.invalidToken
    });
}

export const findUserById = async (req: any, res: any) => {
    const user = await getUserByID(req.params.id);
    if (user) {
        return res.status(200).send({
            status: 200,
            message: constants.success,
            data: user
        });
    }
    return res.status(400).send({
        status: 400,
        message: constants.invalidToken
    });
};