import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

//Import Navbar
import Navbar from '../../components/navbar/navbar'
import ScrollText from '../../components/navbar/scroll_text'

//Import dos components de moedas de câmbio
import USD from '../../components/conversor/USD'
import CAD from '../../components/conversor/CAD'
import EUR from '../../components/conversor/EUR'
import JPY from '../../components/conversor/JPY'
import CNY from '../../components/conversor/CNY'
import GBP from '../../components/conversor/GBP'
import ARS from '../../components/conversor/ARS'

//Cripto moedas
import BTC from '../../components/conversor/BTC'
import DOGE from '../../components/conversor/DOGE'

function Home() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <ScrollText/>
      <Switch>
        <Route exact path="/" component={USD}/>
        <Route exact path="/USD" component={USD}/>
        <Route exact path="/CAD" component={CAD}/>
        <Route exact path="/EUR" component={EUR}/>
        <Route exact path="/JPY" component={JPY}/>
        <Route exact path="/CNY" component={CNY}/>
        <Route exact path="/GBP" component={GBP}/>
        <Route exact path="/ARS" component={ARS}/>
        <Route exact path="/crypto/BTC" component={BTC}/>
        <Route exact path="/crypto/DOGE" component={DOGE}/>
      </Switch>
    </div>
    </Router>
  );
}

export default Home;
