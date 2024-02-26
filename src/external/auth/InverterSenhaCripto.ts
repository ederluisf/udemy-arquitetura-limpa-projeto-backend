import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia";

// TODO - Passar para o caderno depois:
// Na Arquitetura hexagonal, essa implementação da interface ProvedorCriptografia é um Adaptador
// Os Adaptadores NÃO fazem parte do core da aplicação, eles fazer parte do 

export default class InverterSenhaCripto implements ProvedorCriptografia {
  
  criptografar(senha: string): string {
    return senha.split('').reverse().join('');
  }
}