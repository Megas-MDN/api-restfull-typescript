import { Request, Response } from 'express';
import { Cars } from '../models/Cars';

export const getAllCars = async (req: Request, res: Response) => {
  try {
    const cars = await Cars.find();
    if (!cars) {
      return res.status(404).send({ message: 'Cars not found' });
    }
    res.status(200).send({ message: 'Cars registred in DB', cars });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Erro in find All', error });
  }
};

export const getCarById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cars = await Cars.findById(`${id}`);
    if (!cars) {
      return res.status(404).send({ message: 'Car not found' });
    }
    res.status(200).send({ message: 'Car found in DB', cars });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Erro in find a car', error });
  }
};

export const createCar = async (req: Request, res: Response) => {
  try {
    const cars = await Cars.create(req.body);
    if (!cars) {
      return res.status(404).send({ message: 'Car not created' });
    }
    res.status(201).send({ message: 'Car registred in DB', cars });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Erro can not created car', error });
  }
};

export const updateCar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cars = await Cars.findByIdAndUpdate(id, req.body);
    if (!cars) {
      return res.status(404).send({ message: 'Car can not be updated' });
    }
    res.status(200).send({ message: 'Car updated in DB', cars });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Erro can not updated car', error });
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cars = await Cars.findByIdAndDelete(id);
    if (!cars) {
      return res.status(404).send({ message: 'Car can not delete this car' });
    }
    res.status(200).send({ message: 'Car deleted in DB', cars });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Erro can not delete this car', error });
  }
};
