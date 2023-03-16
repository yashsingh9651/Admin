import React from 'react';
import { Widget } from '../components/Widget';
import {ProgressBar} from '../components/ProgressBar';
import {PieChart} from '../components/PieChart';
import { TableList } from '../components/TableList';
export const Home = () => {
  return (
      <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <Widget type={'user'}/>
        <Widget type={'order'}/>
        <Widget type={'earning'}/>
        <Widget type={'balance'}/>
      </div>
      <div className="md:flex w-full text-purple-600 gap-4 my-5">
        <ProgressBar/>      
        <PieChart/>
      </div>
      {/* Transcation Table */}
      <div className='p-3 dark:bg-slate-800 rounded-lg customShadow text-purple-600'>
        <h1 className='text-xl'>Latest Transcation</h1>
        <TableList/>
      </div>
      </>
  )
}
