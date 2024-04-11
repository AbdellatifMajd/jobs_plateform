import React from 'react'

export default function Searchbar() {
  return (
    <div className='searchBar'>

      <div className="content">
        <p>The easiest way to get a job </p>
        <div className="box">
          <input type="text" placeholder='type a key word'/>
          <button>Search</button>
        </div>
      </div>

    </div>
  )
}
