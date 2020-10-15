import React from 'react';

const estadoInicial = {
    nome: '',
    sku:'',
    descricao: '',
    preco: 0,
    fornecedor: ''
}

export default class CadastroProduto extends React.Component {

    state = estadoInicial

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({[nomeDoCampo]: valor})
    }

    onSubmit = (event) =>{
        console.log(this.state)
    }

    limpaCampos = () =>{
        this.setState(estadoInicial)
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">
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
                                <textarea name="descricao" onChange={this.onChange} className="form-control" value={this.state.descricao}/>
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