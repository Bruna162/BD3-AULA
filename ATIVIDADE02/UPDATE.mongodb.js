const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

// db['bd3-nosql-atv2'].updateOne(
//     {'cod_aluno' : 1},
//     {
//         $set: {
//             'cod_turma' : 100,
//             "nome": "Lívia Correia",
//             "cpf": "59234567890",
//             "rg": "592345678",
//             "telefone_aluno": "11939012345",
//             "telefone_responsavel": "11950123456",
//             "email": "livia.correia@al.educacao.sp",
//             "data_nascimento": "2005-07-15T00:00:00"}}
// );

 db['bd3-nosql-atv2'].find();

