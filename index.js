import express from 'express';

const porta=5000;
const host= '0.0.0.0';

var listarCarros = [];

const app= express();

app.use(express.static('./publico'));

app.use('/cadastro', (req,resp)=>{
const modelo = req.query.modelo;
const placa = req.query.placa;
const ano = req.query.ano;
const cidade = req.query.cidade;
const estado = req.query.estado;

listarCarros.push()


});

app.use('/relatorio',(req,resp)=>{


});


app.listen(porta, host, ()=> {
    console.log(`Servidor executando na porta http://${host}; ${porta}`);
})