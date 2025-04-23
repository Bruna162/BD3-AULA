const database = 'bd3_atv3';

use(database);

//CATEGORIAS: COMPUTADORES & ELETRODOMESTICOS (E)

db['bd3_atv3_produtos'].find(
    { $or: [
          {categoria:{$eq: 'Computadores'}},
            {categoria:{$eq: 'Eletrodomésticos'}}
        ]})