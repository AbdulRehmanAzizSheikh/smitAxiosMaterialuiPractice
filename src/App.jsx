import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import axios from 'axios'
import { Grid, Container, Typography } from '@mui/material';
function App() {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const data = await (await axios.get('https://dummyjson.com/products')).data.products
    setProducts(data)
  }
  useEffect(() => {
    getProducts()
  }, [])
  console.log(products);

  return (
    <div className='flex flex-col gap-10'>
      <Navbar />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Our Products
        </Typography>

        <Grid className='grid grid-cols-4 gap-5'>
          {products.map((product) => (
              <ProductCard product={product} />
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default App
