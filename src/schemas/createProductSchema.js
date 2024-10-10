const yup = require('yup')

let createProductSchema = yup.object({
    nome: yup.string().min(3, "Nome minimo 3 letras").max(250).required("Nome do produto obrigatório"),            // nome
    categoriaProduto: yup.mixed()
    .oneOf(["hardware", "periferico", "computador", "games", "celular", "telefone", "tv", "audio", "escritorio", "tablets", "cameras", "outro"]
        , 'Tipos de produtos válidos: hardware, periferico, computador, games, celular, telefone, tv, audio, escritorio, tablets, cameras, outro')
    .required(),
    descricao: yup.string().min(10).max(1000),
    qtdEstoque: yup.number().required(),             // pode ser 0, depois permitir alterar no update
    // codigoBarra //// vai ser gerado no service
    urlFoto: yup.string(),
    peso: yup.number().required(),
    marca: yup.string().required(),
    valor: yup.number().required()

    // email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),                // email 
    // password: yup.string().min(8, "Senha mínima 8 caracteres").required("Senha obrigatório"),           // password_hash
    // dataNascimento: yup.date()                                                 // data_nascimento
    //     .required('A data de nascimento é obrigatória')
    //     .min(new Date(1900, 0, 1), 'A data deve ser posterior a 01/01/1900')
    //     .max(new Date(), 'A data não pode ser no futuro'),
    // telefone: yup.string().required(),                                         // telefone
});


module.exports = createProductSchema;



// # create table produtos (
// 	id_produto SERIAL primary key,
// 	nome VARCHAR(250) not null,
// 	categoria_produto tipo_produto_enum not null,
// 	descricao TEXT,
// 	quantidade_estoque INT NOT NULL DEFAULT 0,
//     codigo_barra VARCHAR(50),
//     foto_url VARCHAR(255),
//     peso DECIMAL(10, 3),
// 	marca VARCHAR(250) not null,
// 	valor DECIMAL(10, 2) not null,
// 	data_cadastro_produto TIMESTAMP default CURRENT_TIMESTAMP	
// )
