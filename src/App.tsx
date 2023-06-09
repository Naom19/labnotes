import Page from './Components/pageComponents/page';
import Navbar from './Components/staticComponents/navAndFooter';
import './Components/staticComponents/static.css';
import logo from '../images/labnotes.png';
import './Components/pageComponents/page.css'
// evitar usar "any" en typescript
// estudiar interfaces y clases de typescript

function App() {
  
  const buttonLabels = [
    {
      className: 'buttonSimple',
      label: 'ABOUT US'
    }, {
      className: 'buttonTriangle',
      label: 'FOR INDIVIDUALS'
    }, {
      className: 'buttonTriangle',
      label: 'FOR TEAMS'
    }, {
      className: 'buttonLogIn',
      label: 'LOG IN'
    }, {
      className: 'buttonTriangle',
      label: 'ENGLISH'
    }
  ]
  
  return (
    <>
      <Navbar logo={logo} buttonLabels={buttonLabels}></Navbar>
      <Page></Page>
    </>
  );
}


export default App;
