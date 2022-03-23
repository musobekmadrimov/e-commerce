import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

export default function Cart({
  cart,
  handleUpdateCartQuantity,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  const classes = useStyles();

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have no items in your shopping cart!
        <Link to="/" className={classes.link}>
          Start adding some
        </Link>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem
                item={item}
                handleRemoveFromCart={handleRemoveFromCart}
                handleUpdateCartQuantity={handleUpdateCartQuantity}
              />
            </Grid>
          ))}
          <div className={classes.cardDetails}>
            <Typography variant="h4">
              Subtotal: {cart.subtotal.formatted_with_code}
            </Typography>
            <div>
              <Button
                className={classes.emptyButton}
                size="large"
                type="button"
                variant="contained"
                color="secondary"
                onClick={handleEmptyCart}
              >
                Empty Cart
              </Button>
              <Button
                className={classes.checkoutButton}
                size="large"
                type="button"
                variant="contained"
                color="primary"
                component={Link}
                to="/checkout"
              >
                Checkout
              </Button>
            </div>
          </div>
        </Grid>
      </>
    );
  };

  if (!cart.line_items) return "<h1>Loading...</h1>";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}
