import React from 'react';

export default (props) => (
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
        {props.produtos.map( (produto, index) => {
                return(
                    <tr key={index}>
                        <td>{produto.nome}</td>
                        <td>{produto.sku}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.fornecedor}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => props.editarAction(produto.sku)}>Editar</button>
                            <button className="btn btn-danger" onClick={() => props.deletarAction(produto.sku)}>Remover</button>
                        </td>
                    </tr>
                )
            })
        }
    </tbody>
</table>
)