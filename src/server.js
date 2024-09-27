import express from 'express';
import { criarRotas } from './rotas.js';

const servidor = express();
servidor.use(express.json());

criarRotas(servidor);

servidor.listen(3001, () => console.log("Servidor rodando !!"));