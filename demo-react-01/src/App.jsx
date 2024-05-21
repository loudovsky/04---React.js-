
import './App.css'
import LeapYear from './components/LeapYear/LeapYear'
import PeopleTable from './components/PeopleTable/PeopleTable'

import peopleData from './data/people.json';

function App() {
 
  return (
   <div>
      {/*<Bienvenue firstname='Louis' age={33}/>*/}
      {/*<LeapYear year={2000}/>
      <LeapYear year={1998}/>
      <LeapYear year={1900}/>
      <LeapYear year={2008}/>*/}

      <PeopleTable title='Exemple !' data={peopleData} />

   </div> 
  )
}

export default App
