import Section1 from "./Section1/Section1"
import { BrowserRouter,Routes ,Route } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/Main-Page' element={<Section1 />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App