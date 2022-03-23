import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import CommerceLogo from "../../assets/commerce.png";
import { Link, useLocation } from "react-router-dom";

import useStyles from "./styles";

export default function Navbar({ totalItems }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            color="inherit"
            component={Link}
            to="/"
          >
            <img
              src={CommerceLogo}
              alt="E-Commerce Logo"
              height="25px"
              className={classes.image}
            />
            MM e-Commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            {location.pathname === "/" && (
              <IconButton
                aria-label="Show Cart items"
                color="inherit"
                component={Link}
                to="/cart"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
