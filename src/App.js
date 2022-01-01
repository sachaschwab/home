import './App.css';
import Navbar from './assets/components/Navbar'
import Header_title from './assets/components/Header_title';
import Sidebar from './assets/components/Sidebar';
import Main_section from './assets/components/Main_section';

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
        <Main_section/>
      </div>  
        
    </div>

    
    
  );
}

export default App;
