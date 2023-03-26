import React, { Component, Fragment  } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export default class About extends Component {
  render() {
    return (
      <Fragment>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <img className='img-fluid slide-In-Bottom'  src='./images/yuki-5.jpg'  alt='...' width='500' height='500'/> {''}          
        </div>
       
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center'>
          <div>
            <div>
              <h1 className='ls-2 mt-2 animate-charcter'>About ME</h1>
              <h2 className='ls-3 mt-3 slide-In-Bottom'>My name is Kesuda Nakkaew, but you can call me Yuki for short.</h2>
            </div>
            <br/>
            <div>
              <h3 className='m-0 slide-In-Bottom'>I was born on Monday, September 1, 2003. I am now 18 years old. and studying at North Bangkok University Faculty of Information Technology and Digital Innovation</h3>
            </div>
            <br/>
            <div>
              <div>
              <h3 className='m-0 slide-In-Bottom'>I love design work, whether it's web design or drawing, but when developing programming.</h3>
            </div>
            <h1 className='ls-2 mt-2 animate-charcter'>Tell Me </h1>
            </div>
            <div>
              <h3 className='m-0 slide-In-Bottom'>0654308158</h3>
            </div> 
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
}

