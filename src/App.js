import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  return (
    <div>
      <Item name="Nirma"></Item>
      <ItemDate day="20" month="June" year="1998"></ItemDate>

      <Item name="SurfExcel"></Item>
      <ItemDate day="22" month="July" year="2000"></ItemDate>

      <Item name="555"></Item>
      <ItemDate day="20" month="Sept" year="2010"></ItemDate>

      <div className="App">Hello jee</div>

    </div>
  );
}

export default App;
