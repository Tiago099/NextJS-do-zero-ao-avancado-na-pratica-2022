import Nome from './components/Nome';

function App() {
  return (
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Lucas" idade={30} />
      <br/>
      <Nome aluno="Tiago" idade={25} />
    </div>
  );
}

export default App;
