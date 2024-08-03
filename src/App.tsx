import './App.css';
import HeaderBar from './components/header/header';
import StockTable from './components/table/table';
import BodyContainer from './components/body-container/body-container';

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <BodyContainer>
        <StockTable/>
      </BodyContainer>
    </div>
  );
}

export default App;
