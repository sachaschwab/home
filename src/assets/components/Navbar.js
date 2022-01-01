import React, { Component } from 'react';
import Navbar_item from './Navbar_item';

export class Navbar extends Component {

  render() {
    const myMenu = ['Analytics', 'AI & Machine Learning', 'NLP', 'iOS & Android']
    return(
        <div>
          <button className='hamburger'>m</button>
          <ul className='Navbar'>
            {myMenu.map(item => {
              return <Navbar_item text={item}/>
            })}
          </ul>
        </div>
    )
  }
}
export default Navbar