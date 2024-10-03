const yup = require('yup')
const { cpf } = require('cpf-cnpj-validator');

let newUserSchema = yup.object({
    nome: yup.string().min(3, "Nome minimo 3 letras").max(50).required("Nome obrigatório"),            // nome
    sobrenome: yup.string().min(3, "Sobrenome minimo 3 letras").max(50, "Sobrenome maximo 50 letras").required("Sobrenome obrigatório"),  // sobrenome 
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),                // email 
    passwordHash: yup.string().min(8, "Senha mínima 8 caracteres").required("Senha obrigatório"),           // password_hash
    dataNascimento: yup.date()                                                 // data_nascimento
        .required('A data de nascimento é obrigatória')
        .min(new Date(1900, 0, 1), 'A data deve ser posterior a 01/01/1900')
        .max(new Date(), 'A data não pode ser no futuro'),
    cpf: yup.string().min(11).max(11).required("Cpf obrigatório"),                      // cpf
    // .test(('cpf-valido', 'CPF inválido', value => cpf.isValid(value))),             // cpf validation
    telefone: yup.string().required(),                                         // telefone
});


module.exports = newUserSchema;

