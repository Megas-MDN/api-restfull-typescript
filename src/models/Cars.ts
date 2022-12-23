import { timeStamp } from 'console';
import mongoose, { Schema } from 'mongoose';

const CarsSchema = new Schema(
  {
    marca: String,
    modelo: String,
    versao: String,
    ano: Number,
    quilometragem: Number,
    tipoCambio: String,
    precoVenda: Number,
  },
  { timestamps: true }
);

export const Cars = mongoose.model('cars', CarsSchema);
