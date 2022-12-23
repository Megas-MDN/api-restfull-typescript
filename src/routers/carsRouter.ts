import { Router } from 'express';
import {
  createCar,
  deleteCar,
  getAllCars,
  getCarById,
  updateCar,
} from '../controllers/CarsControllers';
import { validFields } from '../middlewares/validAllFields';
import { validId } from '../middlewares/validID';
import { validSomeFields } from '../middlewares/validSomeFields';

export const route = Router();

route.get('/cars', getAllCars);

route.get('/cars/:id', validId, getCarById);

route.post('/cars', validFields, createCar);

route.patch('/cars/:id', validId, validSomeFields, updateCar);

route.delete('/cars/:id', validId, deleteCar);
