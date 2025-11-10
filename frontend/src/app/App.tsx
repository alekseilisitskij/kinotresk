import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/index";
import { Link } from "react-router-dom";
import AppRouter from "./router/ui/AppRouter";

const App = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className={classNames("app")}>
      <h1>dfsd</h1>
      <button onClick={toggleTheme}>click</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>Страница</Link>
      <AppRouter />
    </div>
  );
};

export default App;
