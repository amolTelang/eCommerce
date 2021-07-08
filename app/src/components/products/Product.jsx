import React from 'react'
import { Card,CardMedia,CardContent,CardActions,Typography,IconsButton } from '@material-ui/core';
import {AddShoppingCart, CallMissedSharp} from '@material-ui/icons'
const Product = ({products}) => {
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
                  <Typography variant="h2" color="textSecondary">
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
