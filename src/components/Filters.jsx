function Filters (handleSelectName) {
  const handleInput = (event) => {
    handleSelectName(event.Target.value)
  }
  return (
    <div className="form">
      <form className="filters">
      <label htmlFor="Quote" className="filters_label"> Filtrar por frases</label>
      <input className="filter_input" type="text" placeholder="Buscar frase..."  />
      
      <label htmlFor="Character"className="filters_label"> Filtar por personje</label>
      <input className="filter_input" type="text" placeholder="Buscar por personaje..." onInput={handleInput} />
       
      </form>
  </div>
  );
}
export default Filters;