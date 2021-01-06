import { useState } from 'react'
import Input from './Components/Input'
import MarkdownView from './Components/MarkdownPreview'

const App = () => {
  const [input, setInput] = useState('')

  return (
    <main className='grid gap-5 grid-cols-2 bg-gray-100 min-h-screen'>
      <Input setInput={setInput}/>
      <MarkdownView input={input}/>
    </main>
  );
}

export default App;
