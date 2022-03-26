import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import TopHeadline from './TopHeadline/TopHeadline';



function App() {
  return (
    <div >
     <h2 style={{textAlign: "center", margin: "20px"}}> This is React Bootstrap</h2>
     <Header></Header>
     <TopHeadline></TopHeadline>
    
    </div>
  );
}

export default App;
