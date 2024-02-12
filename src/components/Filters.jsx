import FilterCharacter from "./FilterCharacter";
import PropTypes from 'prop-types';

function Filters ({handleSelectName}) {
  
  return (
    <div className="form">
      <form className="filters">
      <label htmlFor="Quote" className="filters_label"> Filtrar por frases</label>
      <input className="filter_input" type="text" placeholder="Buscar frase..."  />
      
      <FilterCharacter handleSelectName={handleSelectName}/>
       
      </form>
  </div>
  );
}
Filters.propTypes = {
  handleSelectName: PropTypes.func.isRequired
};
export default Filters;