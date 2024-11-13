// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
function App() {
  return (

    <>
    <Navbar title="TextUtils"  abouttext="about" />
    <div className="container my-3">
    <Textform  heading="Enter the text to analyze below" />
    </div>
    </>
 
  ); 
}

export default App;
