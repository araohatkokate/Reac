import ListGroup from './components/ListGroup';

function App(){
  const items = [
    'New York',
    'California',
    'Texas']
  return <div><ListGroup items = {items} heading="Cities"/></div>
}


export default App;