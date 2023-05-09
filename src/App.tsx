import Page from './Components/pageComponents/page';
import Navbar from './Components/staticComponents/navAndFooter';
import './App.css'
import './Components/staticComponents/static.css';
import logo from '../images/labnotes.png';
// evitar usar "any" en typescript
// estudiar interfaces y clases de typescript


function App() {
  const buttonLabels = ['ABOUT US', 'FOR INDIVIDUALS', 'FOR TEAMS', 'LOG IN', 'ENGLISH'];
  return (
    <>
    <Navbar logo={logo} buttonLabels={buttonLabels}></Navbar>
    <Page></Page>
    </>
  ); 
}


export default App;
