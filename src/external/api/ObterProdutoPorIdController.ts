import ObterProdutoPorId from '@/core/produto/service/ObterProdutoPorId';
import { Express } from 'express';

export default class ObterProdutoPorIdController {

  constructor(
    servidor: Express,
    casoDeUso: ObterProdutoPorId
  ) {
    servidor.get('/api/produtos/:id', async(req, resp) => {
      
      try {
        const produto = await casoDeUso.executar((req.params as any).id);

        resp.status(200).send(produto);
      }
      catch (erro: any) {
        resp.status(400).send(erro.message);
      }
    });
  }
}