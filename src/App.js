import './App.css';
import Navbar from './assets/components/Navbar'
import Header_title from './assets/components/Header_title';
import Sidebar from './assets/components/Sidebar';


function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <Header_title/>
          <Navbar/>
        </header>
      </div>
    
      <div>
        <Sidebar/>
      </div>
    </div>

    
    
  );
}

export default App;
