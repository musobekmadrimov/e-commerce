import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import useStyles from "./styles";

export default function Product({ product, handleAddToCart }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          className={classes.description}
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Typography variant="body2" className={classes.price}>
          {product.price.formatted_with_code}
        </Typography>
        <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
