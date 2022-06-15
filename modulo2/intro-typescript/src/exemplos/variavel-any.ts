// tipo any pode aceitar qualquer tipo de dados e permite reasignar a variavel alterando o tipo
let valorAny: any;
valorAny = 3;
valorAny = "ola";
valorAny = true;

// exemplo:
let valorString: string = "teste";
//valorString = 3; //>> erro ao tentar alterar o tipo definido explicitamente como string
//valorString = false; //>> erro ao tentar alterar o tipo definido explicitamente como string
valorString = valorAny; // não gera erro de tipagem, permite asignar qualquer tipo pq valorAny tem tipo any




