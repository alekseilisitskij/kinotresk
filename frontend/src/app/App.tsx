import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

const App = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className={classNames("app")}>
      <h1>dfsd</h1>
      <button onClick={toggleTheme}>click</button>
    </div>
  );
};

export default App;
