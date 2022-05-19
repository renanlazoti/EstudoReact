import {useState,useEffect} from "react";

import Mensagem from "./Mensagem"
import Conteudo from "./Conteudo"

export default function Container(){

    //vamos o estado inicial dos produtos, ou seja,
    //quais dados existem dentro do objeto produtos

    const [mensagem,setMensagem] = useState([
        {
            titulo: "",
            autor: "",
            mensagem: ""
        }
    ])

    const[produtos,setProdutos] = useState([
        {
            id:"",
            nome:"",
            descricao: "",
            categoria: "",
            preco: "",
            msg: [],
        },
    ]);

    useEffect(()=>{
        
        fetch("http://10.26.49.50:4000/api/services/produtos/listar")
        .then(response => response.json())
        .then((dados)=>{
            setProdutos(dados.output);
        })
        .catch((erro)=>console.error(`Erro ao carregar a api ->${erro}`));

    },[])

    const mudarDados = (content)=>{
        setMensagem(content);
    }

    return(
        <div className="container">
            <Mensagem info = {mensagem}/>
            <Conteudo dados = {produtos} acao = {mudarDados} />
        </div>
    )
}