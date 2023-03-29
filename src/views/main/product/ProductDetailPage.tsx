import React, { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardTitle, CardActions, AppBar, CircularProgress, Toolbar, Grid, Typography, TextField, Button,  } from "@mui/material";
import { useAppDispatch } from "../../../data/hooks";
import {  readProductData, readProductStatus, readIsAdmin } from "../../../data/product/product.selector";
import { actionGetProductById } from "../../../data/product/product.actions";


interface ProductDetailPageProps {

};

export const ProductDetailPage: React.FC<ProductDetailPageProps> = () => {
  const [productId, category] = useParams();
  const dispatch = useAppDispatch();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSearchProductById = () => {
    setLoading(true);
    dispatch(actionGetProductById(productId, category));
  }

  useEffect(() => {
    onSearchProductById();
  }, [productId]);


  if(readProductData !== null && readProductStatus !== "Error") {
    setProductData(readProductData);
    setLoading(false);
  }

  return (
    <Fragment>
      <AppBar>
        <Toolbar position="fixed">
          <Typography variant="title">
            Product Detail Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item>
          {loading && <CircularProgress />  : null}
          <Card>
           <CardTitle>{productData.name}</CardTitle>
           <CardContent>{productData.description}</CardContent>
           <div class="product-data">
             <div>{productData.discount}</div>
             <div>{productData.category}</div>
             <div>{productData.size}</div>
             <div>{productData.manufacturer}</div>
             <div>{productData.price}</div>
           </div>
           <CardActions>
             { readIsAdmin ?
                 <Button
                   component={Link}
                   to={`/product/${productId}/${category}/update`}
                 >Update Product</Button>
                 : <Button component={Link} to={"/product"}>View more Product</Button>
             }
           </CardActions>
         </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
