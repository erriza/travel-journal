import './App.css';
import data from './data'
import Navegador  from './Components/Nav';
import Card from './Components/Card';

function App() {

  const cards = data.map(item => {
    return (
      <Card
        {...item}
      />
    )
  })

  return (
    <div>
      <Navegador/>
      {cards}
    </div>
  );
}

export default App;
