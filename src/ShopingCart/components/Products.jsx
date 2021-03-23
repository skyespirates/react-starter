import React, { useContext } from "react";
import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@material-ui/core";
import { ShopingCartContext } from "../utils/context";
import ProductItem from "./ProductItem";

export default function Products() {
  const { products } = useContext(ShopingCartContext);
  return (
    <Container maxWidth="sm">
      <Typography variant="h6">Your Cart Items: {products.length}</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Details</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <ProductItem key={product.id} {...product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
