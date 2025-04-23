const database = 'bd3_atv3';

use(database);

//CATEGORIA:ESPORTES (D)
db['bd3_atv3_produtos'].find({
    $and : [
        {categoria:{$eq:'Esportes'}}
        
    ]
})