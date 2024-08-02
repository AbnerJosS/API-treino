import express from 'express';
const servidor = express();

servidor.get('/servidor/somar/:n1/:n2', (req, resp) =>{
    let valor =Number(req.params.n1)
    let valr =Number(req.params.n2)
    
    let resultado= valor+valr

    resp.send({
        mensagem:resultado
    })
})
servidor.listen(5050, () => console.log('a API deu certo'));