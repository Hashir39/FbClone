import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sizebar from './components/Sizebar'
import Widgets from './components/Widgets'


function App() {

  return (
    < >
      <Header />
      <main className="flex flex-grow overflow-hidden " >
        <Sizebar />
        <Feed />
        <Widgets />
      </main >
    </>
  );
}

export default App;
