import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

export const validId = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const valid = mongoose.Types.ObjectId.isValid(id);

    if (!valid) {
      return res.status(400).send({ message: 'Invalid id' });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};
