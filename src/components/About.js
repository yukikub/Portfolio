import React, { Component, Fragment  } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export default class About extends Component {
  render() {
    return (
      <Fragment>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <img className='img-fluid slide-In-Bottom'  src='./images/92316.jpg'  alt='...'/> {''}          
        </div>
       
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex align-items-center'>
          <div>
            <div>
              <h1 className='ls-2 mt-2 animate-charcter'>ความเป็นมาเล็กๆน้อยๆ</h1>
              <h2 className='ls-3 mt-3 animate-charcter-1'>ชื่อ ชลทิศ มิอุบล  เรียกสั้นๆว่า'จิ้งหรีด'ก็ได้</h2>
            </div>
            <div>
              <h3 className='m-0 slide-In-Bottom'>เกิดวันที่ 30 ธ.ค. 2534 เพศ ชาย อายุ 31 ปี</h3>
            </div>
            <div>
              <h1 className='ls-2 mt-2 animate-charcter'>ที่อยู่ปัจจุบัน </h1>
            </div>
            <div>
              <div>
              <h3 className='m-0 slide-In-Bottom'>133/171 ม.2 ต.พิมลราช อ.บางบัวทอง จ.นนทบุรี </h3>
            </div>
            <h1 className='ls-2 mt-2 animate-charcter'>เบอร์โทรติดต่อ </h1>
            </div>
            <div>
              <h3 className='m-0 slide-In-Bottom'>094-717-6906</h3>
            </div> 
            <div>
              <h4 className='ls-2 mt-2 animate-charcter'>ทักษะที่กำลังศึกษา และพัฒนา</h4>
              <h4 className='m-0 slide-In-Bottom'>Python</h4>
              <ProgressBar className='col-lg-6 col-md-10 col-sm-10' completed={40} />
              <h4 className='m-0 slide-In-Bottom'>Java</h4>
              <ProgressBar className='col-lg-6 col-md-10 col-sm-10' completed={20} />
              <h4 className='m-0 slide-In-Bottom'>JavaScript</h4>
              <ProgressBar className='col-lg-6 col-md-10 col-sm-10' completed={15} />
              <h4 className='m-0 slide-In-Bottom'>Html</h4>
              <ProgressBar className='col-lg-6 col-md-10 col-sm-10' completed={15} />
              <h4 className='m-0 slide-In-Bottom'>SQL</h4>
              <ProgressBar className='col-lg-6 col-md-10 col-sm-10' completed={25} />
              <h4 className='m-0 slide-In-Bottom'>CSS</h4>
              <ProgressBar className='col-lg-6 col-md-10 col-sm-10' completed={15} />
              <h4 className='m-0 slide-In-Bottom'>NodeJS</h4>
              <ProgressBar className='col-lg-6 col-md-10 col-sm-10' completed={15} />
              <h4 className='m-0 slide-In-Bottom'>MongoDB</h4>
              <ProgressBar className='col-lg-6 col-md-10 col-sm-10' completed={15} />
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
}

