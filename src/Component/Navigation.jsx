import React from 'react'
import { Link } from 'react-router-dom'
import AddMovie from './AddMovie'
import Cards from './Cards'

const Navigation = () => {
  return (
    <div>
        <Link to='/'>{<Cards/>}</Link>
        <Link to='/addmovie'>{<AddMovie/>}</Link>
    </div>
  )
}

export default Navigation