


const Search = ({searchTerm, setsearchTerm}) => { // -  (props) render here 
  return (
    <div className='search'>
        <div>
        <img src="/search.svg" alt="search bar" />
        <input type="text"
        placeholder="Thousands of Movies"
        value={searchTerm}  // dont manually changed the searc term 
        onChange={ (event) => { 
            setsearchTerm(event.target.value)
        }}/>
        </div>
    </div>
  )
}

export default Search
