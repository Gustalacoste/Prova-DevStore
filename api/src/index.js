import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/produto', async (req, resp) => {
    try{
        let produtos = await db.tb_produto.findAll({ order: [['id_produto', 'desc']] })
        resp.send(produtos);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})


app.post('/produto', async (req, resp) => {
    try{
        let {nome, categoria, avaliacao, preco_de, preco_por, estoque, link_imagem, descricao } = req.body;
       
        let a = await db.tb_produto.findOne({where: {nm_produto: nome } })
        if (a!= null){
            return resp.send({ erro: 'Produto já existe!' })
        }
        if (!nome || nome == ''){
            return resp.send({erro: 'O campo Nome é obrigatório!'})
            
        }
        if (!categoria || categoria == ''){
            return resp.send({erro: 'O campo Categoria é obrigatório!'})
        }
        if (!avaliacao || avaliacao == ''){
            return resp.send({erro: 'O campo Avaliação obrigatório!'})
        }
        if (!preco_de || preco_de == ''){
            return resp.send({erro: 'O campo Preço DE é obrigatório!'})
        }
        if (!preco_por || preco_por == ''){
            return resp.send({erro: 'O campo Preço POR é obrigatório!'})
        }
        if (!estoque || estoque == ''){
            return resp.send({erro: 'O campo Estoque é obrigatório!'})
        }
        if (!link_imagem || link_imagem == ''){
            return resp.send({erro: 'O campo Link Imagem é obrigatório!'})
        }
        if (!descricao || descricao == ''){
            return resp.send({erro: 'O campo Descrição é obrigatório!'})
        }
        if (preco_de <= 0 ){
            return resp.send({erro: 'O campo Preço DE deve receber um número valido'})
        }
        if (preco_por <= 0 ){
            return resp.send({erro: 'O campo Preço POR deve receber um número valido'})
        }
        if (estoque <= 0 ){
            return resp.send({erro: 'O campo Estoque deve receber um número valido'})
        }
        if (avaliacao <= 0 ){
            return resp.send({erro: 'O campo Avaliação deve receber um número valido'})
        }
        if ((preco_de != Number(preco_de))) {
            return resp.send({erro: 'O campo Preço DE deve receber um número'})
        }
        if ((preco_por != Number(preco_por))) {
            returnreso .send({erro: 'O campo Preço POR deve receber um número'})
        }
        if ((estoque != Number(estoque))) {
            return resp.send({erro: 'O campo Estoque deve receber um número'})
        } 
        if ((avaliacao != Number(avaliacao))) {
            return resp.send({erro: 'O campo Avaliação deve receber um número'})
        } 


       
        let r = await db.tb_produto.create({
            nm_produto: nome,
            ds_categoria: categoria, 
            vl_avaliacao: avaliacao, 
            vl_preco_de: preco_de, 
            vl_preco_por: preco_por, 
            qtd_estoque: estoque, 
            img_produto: link_imagem, 
            ds_produto: descricao
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})


app.put('/produto/:id', async (req, resp) => {
    try{
        let { nome, categoria, avaliacao, preco_de, preco_por, estoque, link_imagem, descricao } = req.body;
        let { id } = req.params;

        let r = await db.tb_produto.update({
            nm_produto: nome,
            ds_categoria: categoria, 
            vl_avaliacao: avaliacao, 
            vl_preco_de: preco_de, 
            vl_preco_por: preco_por, 
            qtd_estoque: estoque,  
            img_produto: link_imagem, 
            ds_produto: descricao
        },
        {
            where: { id_produto: id }
        })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})


app.delete('/produto/:id', async (req, resp) => {
    try{
        let { id } = req.params;

        let r = await db.tb_produto.destroy({ where: { id_produto:id } })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})

app.listen(process.env.PORT, x => console.log(`Serve up at port ${process.env.PORT}`))