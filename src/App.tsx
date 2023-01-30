import { useState } from 'react';
import Header from './components/Header';
function App() {
  const [count, setCount] = useState(0);
  console.log('count', count);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
