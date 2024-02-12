import PropTypes from 'prop-types';

function FilterCharacter({ handleSelectName }) {

  const handleInputCharacter = (event) => {
    handleSelectName('character', event.currentTarget.value);
  };

  return (
    <label className="filter__label" htmlFor="character">
      Filtrar por personaje
      <select className="filter__select" onInput={handleInputCharacter}>
        <option value="all">Todos</option>
        <option value="Chandler">Chandler</option>
        <option value="Joey">Joey</option>
        <option value="Monica">Monica</option>       
        <option value="Phoebe">Phoebe</option>              
        <option value="Rachel">Rachel</option>
        <option value="Ross">Ross</option>
      </select>
    </label>
  );
}

FilterCharacter.propTypes = {
  handleSelectName: PropTypes.func.isRequired
};

export default FilterCharacter;
