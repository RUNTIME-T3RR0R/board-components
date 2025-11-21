import { useState } from 'react'
import MyText from "./components/MyText";

function App() {
  const [count, setCount] = useState(0)

  return (<MyText message="This is the start!" />);
}

export default App
