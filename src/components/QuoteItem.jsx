import PropTypes from "prop-types";

function QuoteItem( {quote, character} ) {

  return (
    <div className="card">
      <p className="phase_quote"> {quote}</p>
      <p className="characert_name">{character}</p>
    </div>
  );
}

QuoteItem.propTypes = {
  quote: PropTypes.string,
  character: PropTypes.string,
};

export default QuoteItem;