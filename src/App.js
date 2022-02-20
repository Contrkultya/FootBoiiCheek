import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/app-router";
import {SystemPagesTemplate} from "./pages/system-pages-template";

function App() {
  return (
    <BrowserRouter>
        <SystemPagesTemplate>
            <AppRouter/>
        </SystemPagesTemplate>
    </BrowserRouter>
  );
}

export default App;
