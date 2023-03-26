import React, { Component, Fragment } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <img className='img-fluid slide-In-Bottom' src='\images\yuki-3.3.png'  alt='...' width={500}  height={500}/> {''}          
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center'>
          <div>
            <div className='ms-auto'>
              <h1 className='m-0 slide-In-Bottom'>HI !!</h1>
              <h2 className='ls-2 mt-2 animate-charcter'>I'm Gattesuda Nakkaew</h2>
            </div>
            <h3 className='ls-3 mt-3 animate-charcter-1'>Nick Name  YUKI</h3>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
}

