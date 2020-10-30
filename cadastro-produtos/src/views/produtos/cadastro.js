import React from 'react';

import ProdutoService from '../../app/produtoService'
import {withRouter} from 'react-router-dom'

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: []
}

class CadastroProduto extends React.Component {

    state = estadoInicial

    constructor() {
        super()
        this.service = new ProdutoService()
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor,
        }

        try {
            this.service.salvar(produto)
            this.limpaCampos()
            this.setState({ sucesso: true })
        } catch (erro) {
           
            const errors = erro.errors
            this.setState({errors : erro.errors})
            
        }

        console.log(this.state.errors)
       

    }

    limpaCampos = () => {
        this.setState(estadoInicial)
    }

    componentDidMount(){
        const sku = this.props.match.params.sku;

        if(sku){
           const resultado = this.service.obterProdutos().filter(produto => produto.sku === sku)
            if(resultado.length ===1){
                const produtoEncontrado = resultado[0]
                this.setState({...produtoEncontrado})

            }
        }
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">
                    {
                        this.state.sucesso ?
                            (
                                <div className="alert alert-dismissible alert-success">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>Bem feito</strong> Cadastro Realizado com Sucesso
                                </div>
                            )
                            :
                            (
                                <>
                                </>
                            )
                    }

                    {
                        this.state.errors.length > 0 && 
                            this.state.errors.map( msg => {
                                return(
                                    <div className="alert alert-dismissible alert-danger">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>Erro</strong> {msg}
                                    </div>
                                )
                            })
                    }

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome : *</label>
                                <input type="text" onChange={this.onChange} name="nome" value={this.state.nome} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU : *</label>
                                <input type="text" onChange={this.onChange} name="sku" value={this.state.sku} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição:</label>
                                <textarea name="descricao" onChange={this.onChange} className="form-control" value={this.state.descricao} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço : *</label>
                                <input type="text" name="preco" onChange={this.onChange} value={this.state.preco} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor : *</label>
                                <input type="text" name="fornecedor" onChange={this.onChange} value={this.state.fornecedor} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-primary" onClick={this.limpaCampos}>Limpar</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(CadastroProduto)