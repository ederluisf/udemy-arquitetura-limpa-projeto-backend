import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import RepositorioUsuarioPostgre from './external/db/RepositorioUsuarioPostgre';
import SenhaCripto from './external/auth/SenhaCripto';
import RegistrarUsusario from './core/usuario/service/RegistrarUsuario';
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController';

const app = express();
const porta = process.env.API_PORTA ?? 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(porta, () => {
  console.log(`🔥 Servidor executando na porta ${ porta }!!! 🔥`);  
});

// ------------------------------------------- Rotas Abertas

const repositorioUsuario = new RepositorioUsuarioPostgre();
const provedorCripto = new SenhaCripto();

const registrarUsuario = new RegistrarUsusario(repositorioUsuario, provedorCripto);

new RegistrarUsuarioController(app, registrarUsuario);