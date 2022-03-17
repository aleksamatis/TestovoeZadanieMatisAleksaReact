import 'bootstrap/dist/css/bootstrap.min.css';
import './Reset.css';
import './App.css';

import {Header} from './Header';
import {Actions} from './Actions'
import {Footer} from './Footer'

function App() {
  return (
    <div>
      <Header />
      <Actions />
      <Footer />
    </div>
  );
}

export default App;
