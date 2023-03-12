import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const response = 
    [
      {
        itemName:"Nirma",
        itemDate: "20",
        itemMonth: "June",
        ItemYear: "1998"
      }, 
      {
        itemName:"SurfExcel",
        itemDate: "22",
        itemMonth: "July",
        ItemYear: "2000"
      }, 
      {
        itemName:"555",
        itemDate: "10",
        itemMonth: "Sept",
        ItemYear: "2010"
      }];

  return (
    <div>
      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].ItemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].ItemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].ItemYear}></ItemDate>

      <div className="App">Hello jee</div>

    </div>
  );
}

export default App;
