const database = 'bd3_atv3';

use(database);

//(G)MAIS BARATO PARA O MAIS CARO
// db['bd3_atv3_produtos'].find().sort({valor: 1});

//(H)MAIS CARO PAR AO MAIS BARATO
db['bd3_atv3_produtos'].find().sort({valor: -1});
