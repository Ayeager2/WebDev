import express from 'express';

//Import all the controllers
import {
  createUser,
  getAllUsers,
  getUserInfoByID,
} from '../controllers/user.controller.js';

//create router
const router = express.Router();

//create routes
router.route('/').get(getAllUsers).post(createUser); //you can get and post with the same route so its possible to append
router.route('/:id').get(getUserInfoByID);

export default router;
