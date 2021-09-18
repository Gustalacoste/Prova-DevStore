import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import LoadingBar from 'react-top-loading-bar';

import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'
 
import { Container, Conteudo } from './styled'
 
import { useState, useEffect, useRef } from 'react';
 
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
 

import Api from '../../service/api'
const api = new Api();
 
 
export default function Index() {
 
        const [produtos, setProdutos] = useState([]);
        const [nome, setNome] = useState('');
        const [categoria, setCategoria] = useState('');
        const [avaliacao, setAvaliacao] = useState('');
        const [preco_de, setPreco_de] = useState('');
        const [preco_por, setPreco_por] = useState('');
        const [estoque, setEstoque] = useState('');
        const [link_imagem, setLink_imagem] = useState('');
        const [descricao, setDescricao] = useState('');
        const [idAlterando, setIdAlterando] = useState(0);
        let loading = useRef(null);
 
        async function listar() {
            
            loading.current.continuousStart();
            let r = await api.listar();
            console.log(r);
            setProdutos(r);
            loading.current.complete();
        }
 
        const App = () => {
            const ref = useRef(null)
        }
 
        async function inserirProdutos() {
            loading.current.continuousStart();
 
            if (idAlterando === 0) {
                let r = await api.inserir(nome, categoria, avaliacao, preco_de, preco_por, estoque, link_imagem, descricao);
                if (r.erro)
                    toast.error(r.erro);
                else
                    toast.dark('Produto Inserido!');
            } else {
                let r = await api.alterar(idAlterando, nome, categoria, avaliacao, preco_de, preco_por, estoque, link_imagem, descricao);                ;
                console.log(r);
                if (r.erro)
                    toast.error(r.erro);
                else
                    toast.dark('Produto Alterado!');   
            }
            
            limparCampos();
            listar();
        }
 
 
        function limparCampos() {
            setNome('');
            setCategoria('');
            setAvaliacao('');
            setPreco_de('');
            setPreco_por('');
            setEstoque('');
            setLink_imagem('');
            setDescricao('');
            setIdAlterando(0);
        }
    
 
        async function remover(id) {
            loading.current.continuousStart();
    
            confirmAlert({
                title: 'Remover Produto',
                message: `Tem certeza que deseja remover o produto ${id} ?`,
                buttons: [
                    {
                        label: 'Sim',
                        onClick: async() => {
                            let r = await api.remover(id);
                            if(r.erro){
                                toast.error(`${r.erro}`);
                            } else {
                                toast.dark('Produto removido')
                                listar();
                            }
                        }
                    },
                    {
                        label: 'Não'
                    }
                ]
            })
    
            listar();
            loading.current.complete();
        }
 
 
        async function editar(item) {
            setNome(item.nm_produto);
            setCategoria(item.ds_categoria);
            setAvaliacao(item.vl_avaliacao);
            setPreco_de(item.vl_preco_de);
            setPreco_por(item.vl_preco_por);
            setEstoque(item.qtd_estoque);
            setLink_imagem(item.img_produto);
            setDescricao(item.ds_produto);
            setIdAlterando(item.id_produto);
        }    
 
        useEffect(() => {
            listar()
        }, [])
 
    return (
    <Container>
        <ToastContainer/>
         <LoadingBar color='#f11946' ref={loading} />
         <Menu /> 
            <Conteudo>
             <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student"> { idAlterando === 0 ? "Novo Produto" : "Alterando Produto" + idAlterando } </div>
                         </div>
 
                        <div class="input-new-student"> 
                                    <div class="input"> Nome: <input type="text" value={nome} onChange={e => setNome(e.target.value)} /> </div>  

                                    <div class="input"> Preço DE: <input type="text" value={preco_de} onChange={e => setPreco_de(e.target.value)} /> </div>

                                    <div class="input"> Categoria: <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} /> </div> 

                                    <div class="input"> Preço POR: <input type="text" value={preco_por} onChange={e => setPreco_por(e.target.value)} /> </div> 
                                
                                    <div class="input"> Avaliação: <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)} /> </div>  
                               
                                    <div class="input"> Estoque: <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)} /> </div>  
                                
                                    <div class="input-img"> Link Imagem: <input type="text" value={link_imagem} onChange={e => setLink_imagem(e.target.value)}/> </div>  
                                 
                                    <div class="input"> Descrição: <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} style={{height:'7em', width:'40em'}}/> </div>  
                                
                            <div class="button-create"> <button onClick={inserirProdutos}> {idAlterando === 0 ? "Cadastrar" : "Alterar"} </button> </div>
                        </div>
                    </div>
 
                    <div class="student-registered-box">
                        <div class="row-bar"> 
                            <div class="bar-new-student"> </div>
                            <div class="text-registered-student"> Produtos Cadastrados </div>
                        </div>
                    
 
                        <table class ="table-user">
                            <thead>
                                <tr>
                                    <th>  </th>
                                    <th> ID </th>
                                    <th> Produto </th>
                                    <th> Categoria </th>
                                    <th> Preco </th>
                                    <th> Estoque </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                                    
                            <tbody>
                                {produtos.map((item, i) =>        
                                <tr className={i % 2 === 0 ? "linha-alternada" : ""}>
                                    <td>  
                                       <img src={item.img_produto} alt="" style={{height:'40px', width: '40px'}} />
                                    </td>
 
                                    <td> {item.id_produto} </td>
 
                                    <td title={item.nm_produto}> 
                                        {item.nm_produto != null && item.nm_produto.length >= 25
                                            ? item.nm_produto.substr(0, 25) + '...'
                                            : item.nm_produto} 
                                    </td>
 
                                    <td> {item.vl_avaliacao} </td>
                                    <td> {item.vl_preco_por} </td>
                                    <td> {item.qtd_estoque} </td>
                                    <td className="coluna-acao"> <button onClick={() => editar(item)} > <img src= "/assets/images/Editar.svg" alt ="" /> </button> </td>
                                    <td className="coluna-acao"> <button onClick={() => remover(item.id_produto)} > <img src= "/assets/images/trash-2.svg" alt ="" /> </button> </td>
                                </tr>
 
                            )}
                            
                            </tbody>
 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}
     

