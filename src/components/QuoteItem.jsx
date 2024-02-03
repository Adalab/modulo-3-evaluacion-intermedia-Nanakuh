import PropTypes from "prop-types";

function QuoteItem( {quote, character} ) {

  return (
    <>
      <p className="phase_quote"> {quote}</p>
      <p className="characert_name">{character}</p>
    </>
  );
}

QuoteItem.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default QuoteItem;