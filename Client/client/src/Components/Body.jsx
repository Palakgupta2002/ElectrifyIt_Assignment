
import React from 'react'

import TableComp from './Table'
import ReportHeader from './ReportHeader'

const Body = () => {
  return (
    <div className='h-screen w-screen  bg-slate-900'>
        <div className='flex justify-between mt-3 border-2 border-solid border-white'>
            <div>Reports</div>
            <div className='flex gap-4'>
                <div>Notification</div>
                <div>Profile icon</div>
                <div>username</div>
            </div>
        </div>
        <ReportHeader/>
        <TableComp/>
    </div>
  )
}

export default Body