import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import RepositorioUsuarioPostgre from './external/db/RepositorioUsuarioPostgre';
import SenhaCripto from './external/auth/SenhaCripto';
import RegistrarUsusario from './core/usuario/service/RegistrarUsuario';
import RegistrarUsuarioController from './external/api/RegistrarUsuarioController';
import LoginUsuario from './core/usuario/service/LoginUsuario';
import LoginUsuarioController from './external/api/LoginUsuarioController';
import ObterProdutoPorId from './core/produto/service/ObterProdutoPorId';
import ObterProdutoPorIdController from './external/api/ObterProdutoPorIdController';
import UsuarioMiddleware from './external/api/UsuarioMiddleware';

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

const casoUsoRegistrarUsuario = new RegistrarUsusario(repositorioUsuario, provedorCripto);
const casoUsoLoginUsuario = new LoginUsuario(repositorioUsuario, provedorCripto);

new RegistrarUsuarioController(app, casoUsoRegistrarUsuario);
new LoginUsuarioController(app, casoUsoLoginUsuario);


// ------------------------------------------- Rotas Protegidas
const usuarioMid = UsuarioMiddleware(repositorioUsuario);
const casoUsoObterProdutoPorId = new ObterProdutoPorId();

new ObterProdutoPorIdController(app, casoUsoObterProdutoPorId, usuarioMid);