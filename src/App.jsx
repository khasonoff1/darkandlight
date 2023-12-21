import { Switch } from 'antd';
import { DarkContext } from './context';
import { useState } from 'react';


function App() {
  const [dark, setDark] = useState(false)
  
  const onChange = () => {
    setDark(Boolean(!dark))
  };

  return (
    <DarkContext.Provider>
      <div className={`w-screen h-screen flex items-center justify-center ${dark ? "bg-slate-800" : "bg-slate-500"}`}>
        <Switch defaultChecked onClick={onChange} />
      </div>
    </DarkContext.Provider>
  )
}

export default App