import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
 const [tarefas, setTarefas] = useState([
  "Pagar a conta de luz",
  "Estudar React Js"
 ]);
 

 function handleRegister(e){
e.preventDefault();

setTarefas([...tarefas, input]);
setInput('');

 }
  
    
  return (
    <div>
      <h1>Cadrastrando usuario</h1>
      
      <form onSubmit={handleRegister}>
        <label>Nome:</label><br/>
        <input placeholder='Digite uma tarefa'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        /><br/>

        <button type='submit'>Registra</button>
      </form>

      <br/><br/>
      
      <ul>
        {tarefas.map( tarefas => (
          <li key={tarefas}>{tarefas}</li>
        ))}

      </ul>
      
     
    </div>
  );
}

export default App;
