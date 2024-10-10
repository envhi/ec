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

});


module.exports = createProductSchema;
