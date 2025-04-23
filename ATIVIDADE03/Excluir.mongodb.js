const database = 'bd3_atv3';

use(database);

//CATEGORIAS: ELETRODOMESTICOS & COMPUTADORES EXCLUIDAS (F)

db['bd3_atv3_produtos'].find(
    {categoria:{
        $nin:['Eletrodomésticos', 'Computadores']
    }
},
{
    "categoria.Eletrodomésticos": 0,
    "categoria.Computadores": 0
}
).limit(5);