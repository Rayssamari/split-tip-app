import logo from './assets/images/logo.svg'
import './App.scss';
import {RightComponent} from './components/RightComponent';
import {LeftComponent} from './components/LeftComponent';

function App() {
  return (
    <div className="containerMain">
      <div className='logoImage'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='boxMainContainer'>
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  )
}

export default App
