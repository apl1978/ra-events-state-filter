import './App.css'
import { Portfolio } from "./components/Portfolio";

import projects from "./projects.json";

function App() {

  return (
      <div className='App'>
            <Portfolio projects={projects}/>
      </div>
  )
}

export default App
