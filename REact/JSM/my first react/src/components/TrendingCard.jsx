

const TrendingCard = ({movie , index} ) => {
 
  return (
    <div className='trending-card'>
       <section className="trending">
           
              
                <li key={movie.$id} >
                    <p className="m-[30px]">{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />"
                </li>
  
          </section>
    </div>
  )
}

export default TrendingCard