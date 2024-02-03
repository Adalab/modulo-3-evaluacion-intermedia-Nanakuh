import { useState } from 'react';

import Filters from './Filters';
import Header from './Header';
import QuotesList from './QuotesList';

import '../scss/App.scss'
import dataQuotes from '../data/quotes.json';

function App() {
  const [quotes] = useState(dataQuotes);
  return (
    <div className='app'>
     <Header />
     <main>
      <Filters />     
      <QuotesList quotes={quotes} />
     </main>      
    </div>
  )
}

export default App;
