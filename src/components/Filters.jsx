function Filters () {
  return (
    <form className="filters">
    <label htmlFor="Quote" className="filters_label"> Frases</label>
    <input className="filter_input" type="text" placeholder="Buscar frase..."  />
    
    <label htmlFor="Character"className="filters_label"> Personje</label>
    <input className="filter_input" type="text" placeholder="Buscar por personaje..."  />
  </form>
  );
}
export default Filters;