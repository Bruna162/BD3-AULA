const database = 'bd3_atv3';

use(database);


//MAIS CARO (A)
db['bd3_atv3_produtos'].find().sort({valor: -1}).limit(1);

//MAIS BARATO (B)
db['bd3_atv3_produtos'].find().sort({valor: 1}).limit(1);

