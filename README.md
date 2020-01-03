Import React, React DOM and Babel.
React -> React development
React DOM -> For component rendering
Babel -> Develop in latest JS code and ship it to Browser for Browser compatible code

New JS:
let & const
Arrow functions
Exports and Imports modules:
    {
        const person = {
            name: 'Some Name'
        }
        export default person; --> import person from './person.js' OR import prs from './person.js'

        export const clean = () => { ... } --> import { clean } from './utility.js' OR import { clean as cln } from './utility.js' OR import * as bundled from './utility.js'
    }
Class:
    class Man {
        constructor() {
            this.gender = "male";
        }
        printGender() {
            console.log(this.gender);
        }
    }
    class Person extends Man {
        constructor() { // In ES7, the properties are used directly; not inside constructor
            super();
            this.name = "Max";
            this.gender = "Male";
        }
        printMyName() { // In ES7, printMyName = () => {}
            console.log(this.name);
        }
    }
    const person = new Person();
    person.printGender(); // "Male"
Spread and Rest operators
    Helps to copy an array/object. const secondPerson = { ...person };
Destructuring operator:
    { name } = { name: "Test", filed: "Area"}

Start React Project:
npm install create-react-app -g
create-react-app react-complete-guide

Now -> Code