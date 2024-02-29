import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";

export default class EspacoSenhaCripto implements ProvedorCriptografia {
  
  criptografar(senha: string): string {
    return senha.split('').join(' ');
  }

  comparar(senhaRecebida: string, senhaCriptografada: string): boolean {
    return this.criptografar(senhaRecebida) === senhaCriptografada;
  }
}