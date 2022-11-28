import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Survey from "./pages/Survey";
import setTheme from "./util/ThemeHandler";
import { useEffect } from "react";
import { SurveyProvider } from "./context/SurveyContext";
import Utilities from "./components/Utilities";

function App() {
  
  useEffect(()=>{
    setTheme('default')
  },[])

  return (
    <SurveyProvider>
      <Utilities/>
      <Router>
        <Routes>
          <Route path='/' exact={true} element={<Home />}></Route>
          <Route path='/survey' exact={true} element={<Survey />}></Route>
        </Routes>

      </Router>

    </SurveyProvider>

  );
}

export default App;
