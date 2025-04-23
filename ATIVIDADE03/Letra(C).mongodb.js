const database = 'bd3_atv3';

use(database);

// FAIXA DE VALOR ENTRE 500 & 900 (C)
db['bd3_atv3_produtos'].find({
     valor : {$gte:500, $lte:900}
 });