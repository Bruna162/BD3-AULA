const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

db['bd3-nosql-atv1'].find(
    {"cpf" : "345.678.901-23"},
    {"cod_aluno" :0, "_id" : 0 }
);