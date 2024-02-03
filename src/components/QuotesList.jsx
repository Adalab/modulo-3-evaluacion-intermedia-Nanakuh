import PropTypes from "prop-types";

import QuoteItem from "./QuoteItem";


function QuotesList({ quotes }) {
  const htmlQuotes = quotes.map((quote, idx) => 
    <li key={idx} className="quote_card">
      <QuoteItem text={quote.quote} name={quote.character} 
      />
    </li>
  );
  return (
  <ul className="container">
    {htmlQuotes}
    </ul>
  );  
}
QuotesList.propTypes = {
  quotes:PropTypes.array
}
export default QuotesList;
