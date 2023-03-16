import React from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export const ProgressBar = () => {
  return (
    <div className='md:w-2/6 p-3 dark:bg-slate-800 rounded-lg text-center customShadow'>
          <div className='flex justify-between items-center text-xl'>
            <h1>Total Revenue</h1>
            <MoreVertOutlinedIcon/>
          </div>
          <div className='w-3/6 m-auto my-2'>
            <CircularProgressbar value={70} text="70%" strokeWidth={4}/>
          </div>
          <h1 className='text-base'>Total Sales Made Today</h1>
          <h1 className='text-3xl my-2'>$ 520</h1>
          <h1 className='capitalize text-sm'>previous transaction processing. last payment ,may not be included.</h1>
          <div className="grid grid-cols-3 mt-3">
            <div>
              <h1>Target</h1>
                <h1 className='text-red-600'><ExpandMoreOutlinedIcon/><span>$12.4k</span></h1>
            </div>
            <div>
              <h1>Last week</h1>
              <h1 className='text-green-600'><ExpandMoreOutlinedIcon/><span>$12.4k</span></h1>
                
            </div>
            <div>
              <h1>Last Month</h1>
              <h1 className='text-green-600'><ExpandMoreOutlinedIcon/><span>$12.4k</span></h1>
            </div>
          </div>
        </div>
  )
}
