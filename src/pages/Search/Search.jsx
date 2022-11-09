import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card } from '../../components/Card'

import styles from './Search.module.css'

const search = 'https://api.themoviedb.org/3/search/movie/'
const apiKey = 'api_key=e197eca9102cd33ba20d59a102b0c5d9'

export const Search = () => {

  
  const[movie , setMovie] = useState([])
  const[loading , setLoading] = useState(false)


  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")

  async function cardOne(url){
    setLoading(true)

    const req = await fetch(url);
    const res = await req.json();

    setMovie(res.results)
    setLoading(false)
  }

  useEffect(() => {
    const searchUrl = `${search}?${apiKey}&query=${query}`

    cardOne(searchUrl)
  }, [query])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Confira os resultados de: <span style={{color: 'orange'}}> {query} </span> </h1>
      {loading && <p> Carregando ... </p>}
      {movie.length === 0 && <p> Não existe esses filmes </p>}
      <div className={styles.component}>
        {movie &&
          movie.map((movi) => (
            <div key={movi.id}>
              <Card id={movi.id} className={styles.card} title={movi.title} avaliate={movi.vote_average} image={movi.poster_path}/>
            </div>
          ))}
      </div>
    </div>
  )
}
