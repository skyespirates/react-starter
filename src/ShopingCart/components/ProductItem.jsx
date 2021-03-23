import { TableRow, TableCell, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useContext } from "react";
import { ShopingCartContext } from "../utils/context";
export default function ProductItem({ id, name, qty, price }) {
  const { dispatch } = useContext(ShopingCartContext);
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell align="center">
        <button
          style={{
            display: "inline-block",
            padding: "0",
            width: "20px",
            height: "20px",
            backgroundColor: "#f50057",
            color: "#fff",
            borderStyle: "none",
            cursor: "pointer",
            borderRadius: "5px",
            outlineStyle: "none",
          }}
          onClick={() => {
            if (qty > 0) {
              dispatch({ type: "DECREMENT", payload: id });
            }
          }}
        >
          -
        </button>{" "}
        {qty}{" "}
        <button
          style={{
            display: "inline-block",
            padding: "0",
            width: "20px",
            height: "20px",
            backgroundColor: "#3f51b5",
            color: "#fff",
            borderStyle: "none",
            cursor: "pointer",
            borderRadius: "5px",
            outlineStyle: "none",
          }}
          onClick={() => dispatch({ type: "INCREMENT", payload: id })}
        >
          +
        </button>
      </TableCell>
      <TableCell align="center">${price}</TableCell>
      <TableCell align="center">${qty * price}</TableCell>
      <TableCell align="center">
        <IconButton
          onClick={() => dispatch({ type: "REMOVE_PRODUCT", payload: id })}
        >
          <Delete color="secondary" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
