const express = require ('express')
const cors = require ('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uniqueValidator = require('mongoose-unique-validator')

const app = express()

app.use (express.json())
app.use (cors())

// Definição do Schema do Usuário
const usuarioSchema = mongoose.Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})
usuarioSchema.plugin(uniqueValidator)
const Usuario = mongoose.model("Usuario", usuarioSchema)

// Conexão com o MongoDB
async function connectarAoMongo() {
    await mongoose.connect(`mongodb+srv://Banco:1234@cluster0.bd5d7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
}

// Rota de Cadastro
app.post("/signup",
    [
        body('login').isEmail().withMessage('O login deve ser um email válido'),
        body('password').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { login, password } = req.body;
            const senhaCriptografada = await bcrypt.hash(password, 10);
            const usuario = new Usuario({ login, password: senhaCriptografada });
            await usuario.save();
            res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
        } catch (e) {
            console.error('Erro ao cadastrar usuário', e);
            res.status(409).json({ mensagem: "Erro ao cadastrar usuário ou usuário já existente." });
        }
    }
);

// Rota de Login
app.post("/login", async (req, res) => {
    const login = req.body.login
    const password = req.body.password
    const usuarioExiste = await Usuario.findOne({login: login})
    if (!usuarioExiste) {
        return res.status(401).json({mensagem: "login inválido"})
    }
    const senhaValida = await bcrypt.compare(password, usuarioExiste.password)
    if (!senhaValida) {
        return res.status(401).json({mensagem: "senha inválida"})
    }
    const token = jwt.sign(
        {login : login},
        "chave-secreta",
        {expiresIn: "1h"}
    )
    res.status(200).json({token: token})
})

// Iniciar o servidor
app.listen(3000, () => {
    try {
        connectarAoMongo()
        console.log("up and running")
    } catch (e) {
        console.log('erro na conexão', e)
    }
})