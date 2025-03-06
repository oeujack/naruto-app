import './App.css'
import { useCharacters } from './hooks/useCharacters'

function App() {
  const { data } = useCharacters()

  console.log(data?.characters.find((a) => a.id === 1344))

  return <>OIOI</>
}

export default App
