import Counter from './functional-class/CounterClass'
import FunctionalComponent from './functional-class/Counter'
import FunctionCounter from './functional-class/Counter'

function App() {


  return (
    <div className="App">
      <Counter name='Oriki' />
      <FunctionCounter name='Ngannn'/>
    </div>
  );
}

export default App;
