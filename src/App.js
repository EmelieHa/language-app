
import './App.css';
import React, {useState} from 'react';
import sweden from './sweden.png';
import france from './france.png';
import germany from './germany.png';
import britain from './britain.png';


function Header() {
  return (
    <div>
      <h1>Language App</h1>
    </div>
  )
}

export class Top extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    name: ''
  }
this.handleChange.bind(this);

  }
  handleChange = (event) => {
this.setState({name: event.target.value})
  }
render() {
return (
  <div>
    <h2>Fill in your name and choose your language!</h2>
 <input onChange={this.handleChange}></input>
<Middle name={this.state.name}/> 
  </div>
);
}
}

export function Middle({name}) {
    const [greeting, setGreeting] = useState('')
    return (
        <div>
            <h3>{greeting} {name}</h3>
            <img src={britain} alt='britain' width='200' onClick={() => setGreeting('Welcome')}></img>
            <img src={france} alt='france' width='200' onClick={() => setGreeting('Bienvenue')}></img>
            <img src={germany} alt='germany' width='200' onClick={() => setGreeting('Willkommen')}></img>
            <img src={sweden} alt='sweden' width='200' onClick={() => setGreeting('Välkommen')}></img>   
         <Bottom username={name}/>
            </div>
    )
}


export function Bottom({username}) {
    const [phraseOne, setPhraseOne] = useState('');
    const [phraseTwo, setPhraseTwo] = useState('');
    const [phraseThree, setPhraseThree] = useState('');

    const engOne = 'How are you today?';
    const engTwo = 'My name is '+ username;
    const engThree = 'What time is it?';

    const freOne = "Comment allez-vous aujourd'hui?";
    const freTwo = "Je m'appelle "+ username;
    const freThree = "Il est quelle heure?";

    const gerOne = 'Wir geht es dir heute?';
    const gerTwo = 'Ich heiße '+ username;
    const gerThree = 'Wie spät ist es?';

    const sweOne = 'Hur mår du idag?';
    const sweTwo = 'Jag heter '+ username;
    const sweThree = 'Hur mycket är klockan?';

return (
  <div>
    <h4>Common phrases lexicon</h4>
<p>How are you today?</p><button onClick={() => setPhraseOne(engOne)} class='eng'>English</button><button onClick={() => setPhraseOne(freOne)}  class='fre'>French</button><button onClick={() => setPhraseOne(gerOne)}  class='ger'>German</button><button onClick={() => setPhraseOne(sweOne)}  class='swe'>Swedish</button><br/>
<p class='answer'>{phraseOne}</p>
<p>My name is {username}</p><button onClick={() => setPhraseTwo(engTwo)} class='eng'>English</button><button onClick={() => setPhraseTwo(freTwo)} class='fre'>French</button><button onClick={() => setPhraseTwo(gerTwo)} class='ger'>German</button><button onClick={() => setPhraseTwo(sweTwo)} class='swe'>Swedish</button><br/>
<p class='answer'>{phraseTwo}</p>
<p>What time is it?</p><button onClick={() => setPhraseThree(engThree)} class='eng'>English</button><button onClick={() => setPhraseThree(freThree)}  class='fre'>French</button><button onClick={() => setPhraseThree(gerThree)} class='ger'>German</button><button onClick={() => setPhraseThree(sweThree)}  class='swe'>Swedish</button><br/>
<p class='answer'>{phraseThree}</p>
  
  </div>
)
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
      <Top/>
 
    </div>
  );
}

export default App;
