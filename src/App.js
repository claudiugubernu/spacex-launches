import './App.scss';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
        <Header />
        <FilterBar />
        <Main />
    </div>
  );
}

export default App;
