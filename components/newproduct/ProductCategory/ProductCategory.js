import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from "next/link";

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
}))

export default function ProductCategory(props) {
  console.log('Arun Jha >>', props);
  const classes = useStyles();
  const { options } = props;
  return (
    <Grid className={classes.gridWrapper} item xs={6} md={3}>
      <Card>
        <CardActionArea>
          <div
          >
            <Link href={`/product${options.path}`}>
              <a>
                <CardMedia
                  className={classes.media}
                  height="220"
                  component="img"
                  image={options.images[0]?.url}
                  title={options.name}
                />
                <CardContent className={classes.cardContent}>
                  <div className={classes.priceSection}>
                    <h4 className={classes.title}>{options.name}</h4>
                    <p className={classes.price}>${options.price.value}</p>
                  </div>
                </CardContent>
              </a>
            </Link>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  )
}