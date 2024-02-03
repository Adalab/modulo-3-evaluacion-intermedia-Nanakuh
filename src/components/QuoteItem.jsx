import PropTypes from "prop-types";

function QuoteItem( {text, name} ) {

  return (
    <div className="card">
      <span className="phrase_quote"> {text} - </span>
      <span className="characert_name">{name}</span>
    </div>
  );
}

QuoteItem.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};

export default QuoteItem;