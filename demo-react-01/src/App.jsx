
import './App.css'
import LeapYear from './components/LeapYear/LeapYear'
import PeopleTable from './components/PeopleTable/PeopleTable'
import ProductList from './components/ex-02/ProductList/ProductList';

import peopleData from './data/people.json';
import dataItems from './data/products.json';

function App() {
 
  return (
   <div>
      {/*<Bienvenue firstname='Louis' age={33}/>*/}
      {/*<LeapYear year={2000}/>
      <LeapYear year={1998}/>
      <LeapYear year={1900}/>
      <LeapYear year={2008}/>*/}

      {/*<PeopleTable title='Exemple !' data={peopleData} />*/}
      <ProductList title={`Liste des promotions`} products={dataItems}/>
   </div> 
  )
}

export default App
