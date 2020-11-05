import React from 'react'
import ProdutoService from '../../app/produtoService'
import {withRouter} from 'react-router-dom'

class ConsultaProdutos extends React.Component{
    state = {
        produtos : []
    }

    constructor(){
        super()
        this.service = new ProdutoService
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({produtos})
    }

    preparaEditar = (sku) => {
        console.log(sku)
        this.props.history.push(`/cadastro-produtos/${sku}`)
    }
    
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Consulta Produtos
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>SKU</th>
                                <th>Preço</th>
                                <th>Fornecedor</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.produtos.map( (produto, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{produto.nome}</td>
                                            <td>{produto.sku}</td>
                                            <td>{produto.preco}</td>
                                            <td>{produto.fornecedor}</td>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => this.preparaEditar(produto.sku)}>Editar</button>
                                                <button className="btn btn-danger">Remover</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ConsultaProdutos)