/* import SocialNetworks from './components/SocialNetworks';    */
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './styles/components/app.sass';
 
function App() {
  
  return (
    <div id="portfolio">
    <h1>Paulo Santos</h1>
   {/*  <SocialNetworks/>   */}
    <Sidebar />
    <MainContent />
    </div>
  );
}

export default App
