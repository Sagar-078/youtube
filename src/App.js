import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Video from './pages/ContinueVideo';
import Channel from './pages/Channel';


function App() {
  return (
    <div className='flex flex-col bg-neutral-950 overflow-hidden max-sm:overflow-y-scroll w-[100vw] h-[100vh] '>

      <Navbar/>
      
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search/:searchkeyword" element={<Search/>}/>
          <Route path="/watchvideo/:vid" element={<Video/>}/>
          <Route path="/channel" element={<Channel/>}/>
        </Routes>
      </div>
      

    </div>
  );
}

export default App;
