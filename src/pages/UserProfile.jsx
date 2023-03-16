import React,{useContext,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { TableList } from '../components/TableList';
import Context from '../context/Context';
export const UserProfile = () => {
    const navigate = useNavigate();
    const customContext= useContext(Context);
    const {userData} = customContext;
    useEffect(() => {
        if(userData===2){
            navigate('/users');
        }
    }, [userData.id]);
  return (
    <>
        <div className="text-purple-600 lg:w-2/6 p-2 dark:bg-slate-800 customShadow flex items-center gap-3">
            <img src={userData.img} className='rounded-full cover w-32 md:w-40 h-32 md:h-40' alt="" />
            <div>
                <h1 className='font-semibold md:text-xl'>Name: {userData.username}</h1>
                <h1 className='my-2'>Email: {userData.email}</h1>
                <h1 className={`rounded-md text-white p-1 w-fit ${userData.status}`}>{userData.status}</h1>
            </div>
        </div>
        <h1 className='text-xl font-semibold text-center'>Latest Transcation</h1>
        <TableList/>
    </>
  )
};
