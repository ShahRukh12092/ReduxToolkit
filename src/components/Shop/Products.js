import ProductItem from './ProductItem';

const products=[
  {
    id:'x1',
    title:'Tea Cup',
    price:140,
    description:'Buy this cup and offer to the world!'
  },
  {
    id:'x2',
    title:'Coffe Cup',
    price:240,
    description:'coffe will make you fly'
  }
]
const Products = (props) => {
  return (
    <section className='products'>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product)=>
          <ProductItem key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        )}
      </ul>
    </section>
  );
};

export default Products;
