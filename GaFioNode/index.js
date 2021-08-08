//cd documents/estudos/comp/web/codando_talentos/gafionode
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
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
        res.render('medicamentos', {
            medicamentos: medicamentos,
            style: 'medStyle.css',
            script: 'medScript.js'
        });
    })
});
app.get("/registrations/medicine/create", function(req, res){
    res.render('form');
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
        res.send(err);
    })
});
app.listen(8080, function(){
    console.log('Servidor rodando');
});