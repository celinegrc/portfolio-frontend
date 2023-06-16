import './App.scss';
import {RouterProvider} from "react-router-dom";
import { router } from "./RoutePath"


function App() {
  return (
    <div className="container"> 
    
       <RouterProvider 
    router={router} 
    />
    </div>
  );
}

export default App;
