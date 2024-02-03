function Filters () {
  return (
    <div className="form">
      <form className="filters">
      <label htmlFor="Quote" className="filters_label"> Frases</label>
      <input className="filter_input" type="text" placeholder="Buscar frase..."  />
      
      <label htmlFor="Character"className="filters_label"> Personje</label>
      <input className="filter_input" type="text" placeholder="Buscar por personaje..."  />
        <option value="Mike"></option>
        <option value="Ross"></option>
      </form>
  </div>
  );
}
export default Filters;