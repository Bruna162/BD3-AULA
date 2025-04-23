const database = 'bd3_atv3';

use(database);

//CATEGORIA ELETRONICOS EXCLUIDA, OUTRAS CATEGORIAS DO MAIS CARA AO MAIS BARATO (J)

db['bd3_atv3_produtos'].find(
        {
          "categoria": {
            $nin:["Eletrônicos"] 
          }
        },
        {
          "categoria.Eletrônicos": 0 
        }
      ).sort({ valor: -1 });