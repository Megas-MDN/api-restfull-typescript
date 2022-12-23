// import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

export const validSomeFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      marca,
      modelo,
      versao,
      ano,
      quilometragem,
      tipoCambio,
      precoVenda,
    } = req.body;

    if (
      !marca &&
      !modelo &&
      !versao &&
      !ano &&
      !quilometragem &&
      !tipoCambio &&
      !precoVenda
    ) {
      return res.status(400).send({ message: 'Send some field to update' });
    }
    req.body = {
      marca,
      modelo,
      versao,
      ano,
      quilometragem,
      tipoCambio,
      precoVenda,
    };
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};
