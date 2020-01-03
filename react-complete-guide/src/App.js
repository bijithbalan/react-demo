import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state is managed from inside the component
  state = {
    people: [
      { name: 'John', age: 28 },
      { name: 'Rex', age: 27 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      people: [
        { name: 'Johnson', age: 28 },
        { name: 'Rex', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>I am a React App</h1>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>My hobby is stamp collection.</Person>
      </div>
    );
    // only changes in props and/ or state can trigger React to re-render the components 
    // and potentially update the DOM in the browser
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'I am a React App'));
    // min 3 elements, max infinite elements
    // null is for configuration
  }
}

export default App;

/* React Hooks */
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {
//   const [peopleState, setPeopleState] = useState({
//     people: [
//       { name: 'John', age: 28 },
//       { name: 'Rex', age: 27 }
//     ]
//   });
//  // multiple useStates with state slices are used to manage state within functional components

//   const switchNameHandler = () => {
//     setPeopleState({
//       people: [
//         { name: 'Johnson', age: 28 },
//         { name: 'Rex', age: 27 }
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>I am a React App</h1>
//       <Person name={peopleState.people[0].name} age={peopleState.people[0].age} />
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={peopleState.people[1].name} age={peopleState.people[1].age}>My hobby is stamp collection.</Person>
//     </div>
//   );
// }

// export default app;