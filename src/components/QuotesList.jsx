import PropTypes from "prop-types";
import QuoteItem from "./QuoteItem";


function QuotesList({ quotes }) {
  const htmlQuotes = quotes.map((quotes, idx) => (
    <li key={idx} className="quote_card">
      <QuoteItem
      text={quotes.quote} 
      name={quotes.character} 
      />
    </li>
  ));
  return (
  <ul className="">
    {htmlQuotes}
    </ul>
  );  
}
QuotesList.propTypes = {
  quotes:PropTypes.array
}
export default QuotesList;
