//importing modules
import React from 'react'
import { Card,CardMedia,CardContent,CardActions,Typography,IconButton } from '@material-ui/core';
import {AddShoppingCart, CallMissedSharp} from '@material-ui/icons'
import useStyles from './styles';

//component
const Product = ({product}) => {
    //hook for css
    const classes=useStyles();
    return (
      <Card className={classes.root}>
          <CardMedia className={classes.root} image='' title={product.name}/>
              <CardContent>
                  <div className={classes.root}>
                      <Typography variant="h5" gutterBottom>
                        {product.name}
                      </Typography>
                      <Typography variant="h5" gutterBottom>
                        {product.price}
                      </Typography>
                  </div>
                  <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
              </CardContent>
              <CardActions disableSpacing className={classes.cardActions}>
                  <IconButton aria-label='Add to Cart'>
                      <AddShoppingCart/>
                  </IconButton>

              </CardActions>
      </Card>
    )
}

export default Product
