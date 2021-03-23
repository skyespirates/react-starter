import AppContext from "./utils/context";
import { CssBaseline } from "@material-ui/core";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  return (
    <AppContext>
      <CssBaseline />
      <NavBar />
      <Products />;
    </AppContext>
  );
}

export default App;
