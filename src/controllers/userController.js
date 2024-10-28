const userService = require("../services/userService");

class UserController {

    async findAllUsers(req, res) {
        const data = await userService.findAllUsers()

        return res.json(data)
    }

    async createUser(req, res) {
        const newUser = await userService.createUser(req.body)

        res.status(201).json('Usuário cadastrado com sucesso')
    }

    async getUserInfoById(req, res) {
        const userInfo = await userService.getUserInfoById(35) // test/vai vir do jwt no middleware como req.userId

        res.status(200).json(userInfo)
    }

    async updateUserProfile(req, res) {
    
        const update = await userService.updateUserProfile(req.userId, req.body)

        return res.json(update)

    }


        /*
            dados que podem ser alterados
            nome VARCHAR(50) not null,
            sobrenome VARCHAR(50) not null,
            data_nascimento DATE,
            telefone VARCHAR(20) not null,
        */
        /*
         {
            "nome": "felipe",
            "sobrenome": "foseca",
            "email": "felipefonseca@gmail.com",
            "password": "12345678",
            "dataNascimento": "1996-11-29",
            "telefone": "+5515996558555"
          }
             */
          
    

}

module.exports = new UserController();

