const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

db['bd3-nosql-atv1'].insertMany(
    [
        {
          cod_aluno: 1,
          cod_turma: 101,
          nome: "Quesia",
          cpf: "123.456.789-01",
          rg: "12.345.678-9",
          telefone_aluno: "987654321",
          telefone_responsavel: "987654322",
          email: "quesia@email.com",
          data_nascimento: ("2005-02-15")
        },
        {
          cod_aluno: 2,
          cod_turma: 101,
          nome: "Igor",
          cpf: "234.567.890-12",
          rg: "23.456.789-0",
          telefone_aluno: "987654323",
          telefone_responsavel: "987654324",
          email: "igor@email.com",
          data_nascimento: ("2004-07-10")
        },
        {
          cod_aluno: 3,
          cod_turma: 102,
          nome: "Jamily",
          cpf: "345.678.901-23",
          rg: "34.567.890-1",
          telefone_aluno: "987654325",
          telefone_responsavel: "987654326",
          email: "jamily@email.com",
          data_nascimento: ("2005-11-20")
        },
        {
          cod_aluno: 4,
          cod_turma: 103,
          nome: "Alan",
          cpf: "456.789.012-34",
          rg: "45.678.901-2",
          telefone_aluno: "987654327",
          telefone_responsavel: "987654328",
          email: "alan@email.com",
          data_nascimento: ("2003-05-30")
        },
        {
          cod_aluno: 5,
          cod_turma: 102,
          nome: "Nycole",
          cpf: "567.890.123-45",
          rg: "56.789.012-3",
          telefone_aluno: "987654329",
          telefone_responsavel: "987654330",
          email: "nycole@email.com",
          data_nascimento: ("2006-01-25")
        },
        {
          cod_aluno: 6,
          cod_turma: 103,
          nome: "Yasmin",
          cpf: "678.901.234-56",
          rg: "67.890.123-4",
          telefone_aluno: "987654331",
          telefone_responsavel: "987654332",
          email: "yasmin@email.com",
          data_nascimento: ("2003-09-12")
        },
        {
          cod_aluno: 7,
          cod_turma: 104,
          nome: "Karinny",
          cpf: "789.012.345-67",
          rg: "78.901.234-5",
          telefone_aluno: "987654333",
          telefone_responsavel: "987654334",
          email: "karinny@email.com",
          data_nascimento: ("2004-12-05")
        },
        {
          cod_aluno: 8,
          cod_turma: 104,
          nome: "Matheus",
          cpf: "890.123.456-78",
          rg: "89.012.345-6",
          telefone_aluno: "987654335",
          telefone_responsavel: "987654336",
          email: "matheus@email.com",
          data_nascimento: ("2002-07-18")
        },
        {
          cod_aluno: 9,
          cod_turma: 105,
          nome: "Xikkaya",
          cpf: "901.234.567-89",
          rg: "90.123.456-7",
          telefone_aluno: "987654337",
          telefone_responsavel: "987654338",
          email: "xikkaya@email.com",
          data_nascimento: ("2005-06-22")
        },
        {
          cod_aluno: 10,
          cod_turma: 105,
          nome: "Petterson",
          cpf: "012.345.678-90",
          rg: "01.234.567-8",
          telefone_aluno: "987654339",
          telefone_responsavel: "987654340",
          email: "petterson@email.com",
          data_nascimento: ("2003-04-10")
        }
      ]
    )
      