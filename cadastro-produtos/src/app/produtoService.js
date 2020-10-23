const PRODUTOS ='_PRODUTOS';
 
export function ErrorValidacao(errors){
    this.errors = errors
}

export default class ProdutoService{

    validar = (produto) => {
        const errors = [] 
       

        if(!produto.nome){
            errors.push('O campo nome é obrigatorio')
        }

        if(!produto.sku){
            errors.push('O campo sku é obrigatorio')
        }

        if(!produto.preco || produto.preco <= 0){
            errors.push('O campo Preço deve ter um valor maior que 0')
        }

        if(!produto.fornecedor){
            errors.push('O campo fornecedor é obrigatorio')
        }

        if(errors.length > 0){
            throw new ErrorValidacao(errors)
        } 
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS)
        return JSON.parse(produtos)
    }
    salvar = (produto) => {
        this.validar(produto)
       let produtos = localStorage.getItem(PRODUTOS)

       if(!produtos){
           produtos = []
       }else{
           produtos = JSON.parse(produtos)
       }

       produtos.push(produto);

       localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }
}