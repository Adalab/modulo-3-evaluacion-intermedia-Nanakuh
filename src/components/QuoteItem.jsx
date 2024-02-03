import PropTypes from "prop-types";

function QuoteItem( {text, name} ) {

  return (
    <div className="card">
      <p className="phase_quote"> {text}</p>
      <p className="characert_name">{name}</p>
    </div>
  );
}

QuoteItem.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};

export default QuoteItem;