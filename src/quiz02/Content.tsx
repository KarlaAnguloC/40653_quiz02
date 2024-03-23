
const Content = ({products}: {products: {id: number, name: string, price: number}[]}) => { 
    
 return ( 
    <div className='card'> 
       {products.map(product =>(
        <div key={product.id}>
          <div>{product.name} {product.price}</div>
        </div>
       ))}
    </div>
  )
}

export default Content