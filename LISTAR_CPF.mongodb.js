const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

db['bd3-nosql-atv1'].find(
    {"cpf" : "567.890.123-45"},
);
