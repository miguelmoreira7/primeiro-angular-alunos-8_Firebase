export class Usuario {

  id?: string;
  nome = '';
  cpf = '';
  idade?: number;


  constructor(id?: string, usuario: Usuario = {nome: '', cpf: ''}) {
    this.id = id;
    this.cpf = usuario.cpf;
    this.nome = usuario.nome;
    this.idade = usuario.idade;
  }
}
