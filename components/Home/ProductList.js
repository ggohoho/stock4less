import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  mainroot: {
    backgroundColor: '#fff',
    minHeight: '100vh',
    paddingTop: '55px',
    marginTop: '8px',
  },
  root: {
    flexGrow: 1,
    paddingTop: '25px',
    marginBottom: '15px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '90vh'
    },
    '& a': {
      color: '#000',
      textDecoration: 'none',
      width: '100%',
      display: 'inline-block',
      textDecoration: 'none'
    }
  },
  media: {
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  priceSection: {
    display: 'flex',
  },
  title: {
    margin: 'auto',
    width: '70%',
    textAlign: 'left',
    marginLeft: '0'
  },
  price: {
    margin: 0
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  productImg: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  gridWrapper: {
    marginBottom: '1rem'
  },
  cardContent: {
    minHeight: '70px'
  }
}));

const ProductList = (props) => {
  const classes = useStyles();
  const product = props.products;
  return (
    <Container className={classes.mainroot} maxWidth="xl">
      <h1>Things We Know You'll Love</h1>
      <Grid className={classes.root} container spacing={2}>
        {product?.map((_product) => (
          <Grid className={classes.gridWrapper} key={`a${_product.id}`} item xs={6} md={4}>
            <Card>
              <CardActionArea>
                <div
                  key={`a${_product.id}`}
                >
                  <Link href={`/product${_product.path}`}>
                    <a>
                      <CardMedia
                        className={classes.media}
                        height="300"
                        component="img"
                        image={_product.images[0]?.url}
                        title={_product.name}
                      />
                      <CardContent className={classes.cardContent}>
                        <div className={classes.priceSection}>
                          <h4 className={classes.title}>{_product.name}</h4>
                          <p className={classes.price}>${_product.price.value}</p>
                        </div>
                      </CardContent>
                    </a>
                  </Link>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
