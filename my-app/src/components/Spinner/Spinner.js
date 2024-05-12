import React, { Component } from 'react'
import spinner from '../../assets/spinner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='z-20'>
        <img src={spinner} alt='loading' className='h-20 m-auto my-3'></img>
      </div>
    )
  }
}

export default Spinner
