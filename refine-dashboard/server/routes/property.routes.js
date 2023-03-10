import express from 'express';

//Import all the controllers

import {
  createProperty,
  deleteProperty,
  getAllProperties,
  getPropertyDetail,
  updateProperty,
} from '../controllers/property.controller.js';

//create router
const router = express.Router();

//create routes
router.route('/').get(getAllProperties).post(createProperty);
router
  .route('/:id')
  .get(getPropertyDetail)
  .patch(updateProperty)
  .delete(deleteProperty);

export default router;
