const database = 'bd3_atv3';

use(database);

db['bd3_atv3_produtos'].insertMany(

[
  {
    "nome": "Smartphone X",
    "valor": 2500.00,
    "quantidade_estoque": 15,
    "fabricante": "TechMobile",
    "categoria": "Eletrônicos",
    "descricao": "Smartphone moderno com câmera avançada e tela OLED."
  },
  {
    "nome": "Notebook Pro",
    "valor": 4500.00,
    "quantidade_estoque": 8,
    "fabricante": "CompTech",
    "categoria": "Computadores",
    "descricao": "Notebook poderoso com processador de última geração e design leve."
  },
  {
    "nome": "Fone Bluetooth",
    "valor": 350.00,
    "quantidade_estoque": 20,
    "fabricante": "AudioMax",
    "categoria": "Acessórios",
    "descricao": "Fones de ouvido sem fio com cancelamento de ruído e som premium."
  },
  {
    "nome": "Câmera DSLR",
    "valor": 5800.00,
    "quantidade_estoque": 5,
    "fabricante": "FotoPro",
    "categoria": "Fotografia",
    "descricao": "Câmera DSLR profissional com sensor de alta resolução e lentes intercambiáveis."
  },
  {
    "nome": "Geladeira FrostFree",
    "valor": 3300.00,
    "quantidade_estoque": 12,
    "fabricante": "HomeCool",
    "categoria": "Eletrodomésticos",
    "descricao": "Geladeira espaçosa com tecnologia frost free e economia de energia."
  },
  {
    "nome": "TV 4K UHD",
    "valor": 3800.00,
    "quantidade_estoque": 10,
    "fabricante": "VisionTech",
    "categoria": "Eletrônicos",
    "descricao": "Televisor 4K com HDR, áudio imersivo e apps integrados."
  },
  {
    "nome": "Cadeira Gamer",
    "valor": 900.00,
    "quantidade_estoque": 18,
    "fabricante": "GameComfort",
    "categoria": "Móveis",
    "descricao": "Cadeira ergonômica com apoio lombar e ajuste de altura."
  },
  {
    "nome": "Smartwatch Fit",
    "valor": 1200.00,
    "quantidade_estoque": 14,
    "fabricante": "WearTech",
    "categoria": "Acessórios",
    "descricao": "Relógio inteligente com monitoramento de saúde e conectividade Bluetooth."
  },
  {
    "nome": "Fogão 5 bocas",
    "valor": 1800.00,
    "quantidade_estoque": 7,
    "fabricante": "ChefHouse",
    "categoria": "Eletrodomésticos",
    "descricao": "Fogão com acendimento automático e forno elétrico integrado."
  },
  {
    "nome": "Mochila Executiva",
    "valor": 250.00,
    "quantidade_estoque": 25,
    "fabricante": "UrbanBag",
    "categoria": "Moda",
    "descricao": "Mochila resistente, impermeável e com compartimentos organizados."
  },
  {
    "nome": "Monitor Full HD",
    "valor": 1100.00,
    "quantidade_estoque": 9,
    "fabricante": "VisionTech",
    "categoria": "Computadores",
    "descricao": "Monitor com resolução Full HD e tecnologia antirreflexo."
  },
  {
    "nome": "Cafeteira Expresso",
    "valor": 750.00,
    "quantidade_estoque": 16,
    "fabricante": "BrewMaster",
    "categoria": "Eletrodomésticos",
    "descricao": "Cafeteira expresso com vaporizador de leite e ajuste de intensidade."
  },
  {
    "nome": "Mesa de Escritório",
    "valor": 650.00,
    "quantidade_estoque": 14,
    "fabricante": "WorkSpace",
    "categoria": "Móveis",
    "descricao": "Mesa espaçosa com gavetas e estrutura reforçada."
  },
  {
    "nome": "Teclado Mecânico RGB",
    "valor": 400.00,
    "quantidade_estoque": 22,
    "fabricante": "GameTech",
    "categoria": "Acessórios",
    "descricao": "Teclado mecânico com iluminação RGB personalizável."
  },
  {
    "nome": "Drone 4K",
    "valor": 3200.00,
    "quantidade_estoque": 6,
    "fabricante": "SkyView",
    "categoria": "Fotografia",
    "descricao": "Drone com câmera 4K e estabilização de imagem avançada."
  },
  {
    "nome": "Liquidificador Turbo",
    "valor": 280.00,
    "quantidade_estoque": 30,
    "fabricante": "KitchenMaster",
    "categoria": "Eletrodomésticos",
    "descricao": "Liquidificador potente com múltiplas velocidades e lâminas de aço."
  },
  {
    "nome": "Jaqueta Impermeável",
    "valor": 550.00,
    "quantidade_estoque": 18,
    "fabricante": "OutdoorWear",
    "categoria": "Moda",
    "descricao": "Jaqueta resistente à água e ao vento, ideal para aventuras ao ar livre."
  },
  {
    "nome": "Roteador Wi-Fi 6",
    "valor": 780.00,
    "quantidade_estoque": 12,
    "fabricante": "NetSpeed",
    "categoria": "Eletrônicos",
    "descricao": "Roteador de alta velocidade com tecnologia Wi-Fi 6 e cobertura ampliada."
  },
  {
    "nome": "Mala de Viagem",
    "valor": 420.00,
    "quantidade_estoque": 20,
    "fabricante": "TravelEase",
    "categoria": "Acessórios",
    "descricao": "Mala resistente com rodinhas 360° e cadeado embutido."
  },
  {
    "nome": "Bicicleta Urbana",
    "valor": 2500.00,
    "quantidade_estoque": 10,
    "fabricante": "CityRide",
    "categoria": "Esportes",
    "descricao": "Bicicleta leve e ágil, perfeita para deslocamentos urbanos."
  },
  {
    "nome": "Tênis Esportivo",
    "valor": 450.00,
    "quantidade_estoque": 25,
    "fabricante": "FitRun",
    "categoria": "Moda",
    "descricao": "Tênis confortável com amortecimento avançado para corrida."
  },
  {
    "nome": "Caixa de Som Bluetooth",
    "valor": 680.00,
    "quantidade_estoque": 15,
    "fabricante": "SoundMax",
    "categoria": "Eletrônicos",
    "descricao": "Caixa de som portátil com som potente e bateria de longa duração."
  },
  {
    "nome": "Ventilador de Mesa",
    "valor": 220.00,
    "quantidade_estoque": 30,
    "fabricante": "CoolAir",
    "categoria": "Eletrodomésticos",
    "descricao": "Ventilador compacto e silencioso com ajuste de velocidade."
  },
  {
    "nome": "Mochila para Notebook",
    "valor": 320.00,
    "quantidade_estoque": 18,
    "fabricante": "UrbanBag",
    "categoria": "Acessórios",
    "descricao": "Mochila acolchoada para notebook com vários compartimentos."
  },
  {
    "nome": "Câmera de Segurança",
    "valor": 990.00,
    "quantidade_estoque": 12,
    "fabricante": "SafeTech",
    "categoria": "Eletrônicos",
    "descricao": "Câmera de segurança HD com visão noturna e conexão Wi-Fi."
  },
  {
    "nome": "Mesa de Jantar",
    "valor": 1100.00,
    "quantidade_estoque": 9,
    "fabricante": "HomeStyle",
    "categoria": "Móveis",
    "descricao": "Mesa de jantar elegante com capacidade para seis pessoas."
  },
  {
    "nome": "Smart Lamp",
    "valor": 250.00,
    "quantidade_estoque": 20,
    "fabricante": "LightTech",
    "categoria": "Eletrônicos",
    "descricao": "Luminária inteligente com ajuste de cor e controle por app."
  },
  {
    "nome": "Aspirador de Pó",
    "valor": 850.00,
    "quantidade_estoque": 14,
    "fabricante": "CleanMaster",
    "categoria": "Eletrodomésticos",
    "descricao": "Aspirador potente e compacto, ideal para limpeza eficiente."
  },
  {
    "nome": "Bicicleta Dobrável",
    "valor": 3100.00,
    "quantidade_estoque": 7,
    "fabricante": "MobilityRide",
    "categoria": "Esportes",
    "descricao": "Bicicleta dobrável leve e prática para transporte urbano."
  },
  {
    "nome": "Colchão Ortopédico",
    "valor": 1400.00,
    "quantidade_estoque": 10,
    "fabricante": "SleepWell",
    "categoria": "Móveis",
    "descricao": "Colchão ergonômico com espuma de alta densidade e suporte lombar."
  },
  {
    "nome": "Fritadeira Air Fryer",
    "valor": 620.00,
    "quantidade_estoque": 18,
    "fabricante": "KitchenPro",
    "categoria": "Eletrodomésticos",
    "descricao": "Fritadeira sem óleo com tecnologia de circulação de ar quente."
  },
  {
    "nome": "Relógio Analógico",
    "valor": 350.00,
    "quantidade_estoque": 22,
    "fabricante": "TimeStyle",
    "categoria": "Acessórios",
    "descricao": "Relógio clássico com pulseira de couro e mecanismo preciso."
  },
  {
    "nome": "Suporte para Monitor",
    "valor": 120.00,
    "quantidade_estoque": 30,
    "fabricante": "DeskFit",
    "categoria": "Móveis",
    "descricao": "Suporte ergonômico para monitor, ajustável e resistente."
  },
  {
    "nome": "Máquina de Lavar",
    "valor": 2800.00,
    "quantidade_estoque": 10,
    "fabricante": "WashMaster",
    "categoria": "Eletrodomésticos",
    "descricao": "Máquina de lavar com ciclo econômico e capacidade para 12kg."
  },
  {
    "nome": "Carregador Portátil",
    "valor": 180.00,
    "quantidade_estoque": 25,
    "fabricante": "PowerGo",
    "categoria": "Eletrônicos",
    "descricao": "Carregador portátil com alta capacidade e carregamento rápido."
  },
  {
    "nome": "Cadeira de Escritório",
    "valor": 850.00,
    "quantidade_estoque": 15,
    "fabricante": "WorkComfort",
    "categoria": "Móveis",
    "descricao": "Cadeira ajustável e ergonômica, ideal para longas horas de trabalho."
  },
  {
    "nome": "Balança Digital",
    "valor": 220.00,
    "quantidade_estoque": 28,
    "fabricante": "HealthCheck",
    "categoria": "Saúde",
    "descricao": "Balança digital com medição de peso e percentual de gordura."
  },
  {
    "nome": "Mouse sem fio",
    "valor": 160.00,
    "quantidade_estoque": 40,
    "fabricante": "TechClick",
    "categoria": "Acessórios",
    "descricao": "Mouse ergonômico sem fio com sensor de alta precisão."
  },
  {
    "nome": "Torradeira Inox",
    "valor": 290.00,
    "quantidade_estoque": 20,
    "fabricante": "ToastMax",
    "categoria": "Eletrodomésticos",
    "descricao": "Torradeira rápida com ajuste de temperatura e design moderno."
  },
  {
    "nome": "Mala Executiva",
    "valor": 520.00,
    "quantidade_estoque": 12,
    "fabricante": "TravelBusiness",
    "categoria": "Acessórios",
    "descricao": "Mala elegante para viagens corporativas, com compartimentos organizados."
  },
  {
    "nome": "Ferro de Passar",
    "valor": 180.00,
    "quantidade_estoque": 25,
    "fabricante": "IronTech",
    "categoria": "Eletrodomésticos",
    "descricao": "Ferro a vapor com ajuste de temperatura e base antiaderente."
  },
  {
    "nome": "Cadeira Dobrável",
    "valor": 350.00,
    "quantidade_estoque": 18,
    "fabricante": "EasyComfort",
    "categoria": "Móveis",
    "descricao": "Cadeira dobrável leve e resistente, ideal para eventos e viagens."
  },
  {
    "nome": "Carregador Rápido USB-C",
    "valor": 220.00,
    "quantidade_estoque": 30,
    "fabricante": "ChargeMax",
    "categoria": "Acessórios",
    "descricao": "Carregador rápido USB-C compatível com diversos dispositivos."
  },
  {
    "nome": "Mesa para Computador",
    "valor": 720.00,
    "quantidade_estoque": 12,
    "fabricante": "WorkDesk",
    "categoria": "Móveis",
    "descricao": "Mesa compacta para computador com prateleiras e espaço para organização."
  },
  {
    "nome": "Câmera de Ação",
    "valor": 1400.00,
    "quantidade_estoque": 8,
    "fabricante": "AdventureCam",
    "categoria": "Fotografia",
    "descricao": "Câmera compacta para esportes radicais, gravação em 4K e resistência à água."
  },
  {
    "nome": "Fone de Ouvido Intra-Auricular",
    "valor": 120.00,
    "quantidade_estoque": 35,
    "fabricante": "AudioClear",
    "categoria": "Acessórios",
    "descricao": "Fone de ouvido confortável com som nítido e cancelamento de ruído."
  },
  {
    "nome": "Projetor Portátil",
    "valor": 2300.00,
    "quantidade_estoque": 6,
    "fabricante": "VisionBeam",
    "categoria": "Eletrônicos",
    "descricao": "Projetor compacto com suporte a HD e conexão sem fio."
  },
  {
    "nome": "Bolsa Tote",
    "valor": 290.00,
    "quantidade_estoque": 20,
    "fabricante": "UrbanStyle",
    "categoria": "Moda",
    "descricao": "Bolsa espaçosa com design elegante e materiais de alta qualidade."
  },
  {
    "nome": "Ventilador de Torre",
    "valor": 480.00,
    "quantidade_estoque": 15,
    "fabricante": "BreezeFlow",
    "categoria": "Eletrodomésticos",
    "descricao": "Ventilador de torre silencioso com controle remoto e múltiplas velocidades."
  },
  {
    "nome": "Kit de Ferramentas",
    "valor": 620.00,
    "quantidade_estoque": 10,
    "fabricante": "FixPro",
    "categoria": "Acessórios",
    "descricao": "Kit completo com diversas ferramentas para reparos e manutenção."
  }
  ]
);
  