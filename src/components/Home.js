import React, { Component, Fragment } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center'>
          <div>
            <div>
              <h1 className='m-0 slide-In-Bottom'>ผมคือ</h1>
              <h2 className='ls-2 mt-2 animate-charcter'>  ชลทิศ มิอุบล</h2>
            </div>
            <h3 className='ls-3 mt-3 animate-charcter-1'>เรียกสั้นๆว่า'จิ้งหรีด'ก็ได้</h3>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <img className='img-fluid slide-in-right' src='./images/288227275_n.jpg'  alt='...'/> {''}          
        </div>
      </div>
      </Fragment>
    )
  }
}

