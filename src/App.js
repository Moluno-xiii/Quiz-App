import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {Items.map((item, i) => (
        <div className="container ">
          <div className="question-container">
            <h2>{item.question}</h2>
            <p>option {i + 1}: {item.options.option1}</p>
            <p>option {i + 1}: {item.options.option2}</p>
            <p>option {i + 1}: {item.options.option3}</p>
            <p className='click'>option {i + 1}: {item.options.option4}</p>
          </div>
        </div>
     ))}
     </div>
     );
}




const Items = [{
  question: 'How many days are in a year',
  // options : ['365 days', '360 days', '355 1/4 days', '330 days']
  options : {  option1 : '365 days', 
  option2 : '360 days', 
  option3 : '355 1/4 days', 
  option4 :'money' ,}

}]





export default App;
