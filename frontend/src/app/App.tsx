import { classNames } from "../shared/lib/classNames/classNames";
// import { useTheme } from "./providers/ThemeProvider/index";
import AppRouter from "./router/ui/AppRouter";

const App = () => {
  // const { toggleTheme } = useTheme();
  return (
    <div className={classNames("app")}>
      <AppRouter />
    </div>
  );
};

export default App;
