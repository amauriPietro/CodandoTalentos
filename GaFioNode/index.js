//cd documents/estudos/comp/web/codando_talentos/gafionode
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const { sequelize } = require('./models/db');
const Medicamentos = require('./models/Medicamentos');
    //const Post = require('./models/Medicamentos');
//configuração do body parser
//const bodyParser = require('body-parser'); deprecated
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/public", express.static('public'));

//config template engine
app.engine('handlebars', handlebars({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layout/' }))
app.set('view engine', 'handlebars');

//rotas
app.get("/home", function(req, res){
    res.render('home');
})
app.get("/registrations/medicine", function(req, res){
    Medicamentos.findAll().then(function(medicamentos){
        console.log(medicamentos);
        res.render('medicamentos', {
            medicamentos: medicamentos,
            style: 'medStyle.css',
            script: 'medScript.js'
        });
    })
});

app.get("/registrations/medicine/search/:atr/:in", async function(req, res){
    Medicamentos.findAll({
        where: {
            [req.params.atr]: [req.params.in]
        }
    }).then(function(medicamentos){
        console.log(medicamentos);
        res.render('medicamentos', {
            medicamentos: medicamentos,
            style: 'medStyle.css',
            script: 'medScript.js'
        });
    })
});

app.get("/registrations/medicine/create", function(req, res){
    res.render('form', {
        style: 'formStyle.css',
        script: 'formScript.js'
    });
});

app.post("/registrations/medicine/add", function(req, res){
    Medicamentos.create({
        Código: req.body.EAN,
        CNPJ: req.body.CNPJ,
        PrincípioAtivo: req.body.Princ,
        Laboratório: req.body.Lab,
        Registro: req.body.Reg,
        Produto: req.body.Prod,
        Apresentação: req.body.Apr,
        ClasseTerapêutica: req.body.Clas
    }).then(function(){
        res.redirect('/registrations/medicine');
    }).catch(function(err){
        res.send('Um erro ocorreu');
    })
});

app.get("/registrations/medicine/delete/:id", function(req, res){
    Medicamentos.destroy({where: {'Código': req.params.id}}).then(function(){
        res.redirect('/registrations/medicine');
    }).catch(function(erro){
        res.send(erro);
    })
});

app.get("/registrations/medicine/update/:id", async function(req, res){
    const med = await sequelize.query(`SELECT * FROM medicamentos WHERE Código = ${req.params.id}`);
    res.render('update', {
        style: 'formStyle.css',
        script: 'formScript.js',
        medicamento: med[0][0]
    })
})

app.post("/registrations/medicine/update", async function(req, res){
    await sequelize.query(`UPDATE medicamentos SET
        CNPJ = '${req.body.CNPJ}',
        PrincípioAtivo = '${req.body.Princ}',
        Laboratório = '${req.body.Lab}',
        Registro = '${req.body.Reg}',
        Produto = '${req.body.Prod}',
        Apresentação = '${req.body.Apr}',
        ClasseTerapêutica = '${req.body.Clas}'
        WHERE Código = '${req.body.EAN}'
    `).then(function(){
        res.redirect('/registrations/medicine');
    }).catch(function(erro){
        res.send(erro);
    })
})
app.listen(8080, function(){
    console.log('Servidor rodando');
});