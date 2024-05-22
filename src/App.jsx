import React from 'react'
import './App.css'

function App() {
  return (
    <>
    <section>
    <div>
       
        <div className="navbar">
          <button>Tasty</button>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Speciatelist</li>
            <li>Reservation</li>
            <li>Blog</li>
            <li>Account</li>
            <li>Contact</li>
          </ul>
          <button>Admin</button>
        </div>
    <div className='text'>
    <h1>Book a table for yourself at a time convenient for you</h1>
    <button className="btn">Book a table</button>
    </div>
    <div className="form" >
      <input  type="text" placeholder='Name' />
      <input type="number" placeholder='Phone' />
      <input type="text" placeholder='M/D/YYYY' />
      <input type="text" placeholder='Time' />
       <input type="text" placeholder='Person' />
       <button className="book">Book a Table</button>
    </div>
      
    </div>
    
    </section>
    <div className="chef">
    <div className="qutu">
    <div className="foto"></div>
    <div className="txt">
    <p>ABOUT TASTY</p>
    <h2>Our chef cooks the most delicious food for you</h2>
    <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
    <span></span>
    </div>
    </div>
  </div> 
  <header>
    <h6>Our menu</h6>
    <h3>Discover Our Exclusive Menu</h3>
    <div className="buttons"><button>Menu</button>
    <button>Dessert</button>
    <button>Drinks</button>
    </div>
    <div className="sections">
      <p className="ikon ">icon</p>
      <div>
        <span className="name">Grilled Beef with potatoes</span> 
        <p className="content"> Meat, Potatoes, Rice, Tomatoe</p>
      </div>
      <p className="price ">$29</p>
      
    </div>
  </header></>
  )
}

export default App
