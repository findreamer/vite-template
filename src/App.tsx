import { useState } from 'react';
import Header from './components/Header';
import { ReactComponent as ReactLogo } from '@/assets/react.svg';

function App() {
  const [count, setCount] = useState(0);
  console.log('count =>', count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>render</button>
      <Header />
      <ReactLogo />
    </div>
  );
}

export default App;
