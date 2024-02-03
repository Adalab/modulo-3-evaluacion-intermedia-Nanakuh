function Filters () {
  return (
    <form className="filters">
    <label htmlFor="Quote" className="filters_label"> Frases</label>
    <input className="filter_input" type="text" placeholder="Buscar por título..."  />
    <label htmlFor="Character"className="filters_label"> Personje</label>
    <input className="filter_input" type="text" placeholder="Buscar por título..."  />
  </form>
  )
}
export default Filters;