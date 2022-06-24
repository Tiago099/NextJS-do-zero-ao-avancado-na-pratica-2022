import { useState } from 'react';

import Nome from './components/Nome';

function App() {
  const [aluno, setAluno] = useState("Tiago");
  
  function handleChangeName(){
    setAluno('Jonas');
    
  }

  return (
    <div>
      <h1>Componente App</h1>
      <h2>Olá: {aluno} </h2>
      <button onClick={handleChangeName}> 
      Mudar Nome
      </button>
    </div>
  );
}

export default App;
