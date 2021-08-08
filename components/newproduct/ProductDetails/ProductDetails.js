import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useAddItem } from '@framework/cart'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useUI } from '@components/ui'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'
import { ProductCategory } from '../ProductCategory'

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '2em',
    fontWeight: 'bold'
  }
}))

export default function ProductDetails(props) {
  const { product, relatedProducts } = props;
  const classes = useStyles();
  const addItem = useAddItem()
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState({})
  const { openSidebar } = useUI()
  const variant = getProductVariant(product, selectedOptions)

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [])

  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  console.log('Arun Jha props', props);
  return (
    <Container maxWidth="xl">
      <Grid container className={classes.root} spacing={2}>
        <Grid item md={5} xs={12}>

        </Grid>
        <Grid item md={7} xs={12}>
          <h1 className={classes.title} dangerouslySetInnerHTML={{ __html: product.name }} />
          <h2 classes={classes.price}>${product.price.value}</h2>
          <Button
            aria-label="Add to Cart"
            type="button"
            className={classes.button}
            onClick={addToCart}
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <h2>Product Description</h2>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </Grid>
      <Grid item xs={12}>
      <h2>Related Products</h2>
      <Grid container className={classes.root} spacing={2}>
        { relatedProducts.map(item => <ProductCategory options={item} /> )}
          
        </Grid>
      </Grid>
    </Container>
  );
}