const database = 'bd3_atv3';

use(database);

//CATEGORIA ELETRONICOS DO MAIS BARATO SO MAIS CARO (I)
db['bd3_atv3_produtos'].find(
    {"categoria": "Eletrônicos"}
).sort({valor: -1});

