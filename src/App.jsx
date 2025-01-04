import Profilepage from './components/Profile.jsx'
import data from './data/file.json'; 
function App() {

  return (
    <>
      <Profilepage data={data}/>
    </>
  )
}

export default App
