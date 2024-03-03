
// TODO - Passar para o caderno depois:
// Interfaces são Portas e as portas fazem parte do CORE da aplicação
// Essas portas definem as demandas de negócio da aplicação

// No Core, consideramos a camada de entidade e a camadas de Casos de Uso

export default interface ProvedorCriptografia {
  criptografar(senha?: string): string;
  comparar(senhaRecebida: string, senhaCriptografada: string): boolean;
}