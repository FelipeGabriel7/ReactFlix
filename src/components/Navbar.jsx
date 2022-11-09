import React from 'react'

// Router
import { Link } from 'react-router-dom'

// Css
import styles from './Navbar.module.css'
import { Search } from './Search'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <h1> <Link  className={styles.title} to="/">React<span>Flix</span></Link> </h1>
        <Search className={styles.search} />
    </div>
  )
}
