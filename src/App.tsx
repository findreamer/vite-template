import { useState } from 'react';
import Header from './components/Header';
import { ReactComponent as ReactLogo } from '@/assets/react.svg';

function App() {
  const [count, setCount] = useState(0);
  console.log('count =>', count);

  return (
    <div>
      <Header />
      <ReactLogo />
    </div>
  );
}

export default App;
