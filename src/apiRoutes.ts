import { Router } from 'express';
import {
    UserController
} from './controllers';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API Works',
        message: 'Welcome to Rest API'
    });
});

router.route('/login').post(UserController.login);

router.route('/user/type/:type').get(UserController.findUsersByType);

router.route('/user').get(UserController.findAllUsers).post(UserController.addNewUser);


export default router;