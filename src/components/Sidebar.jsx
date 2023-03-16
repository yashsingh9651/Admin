import React, { useContext} from 'react';
import {Link,useLocation} from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import Context from '../context/Context';
import ClearIcon from '@mui/icons-material/Clear';
export const Sidebar = () => {
    // ? Sidebar Popup from Context...
    const customContext = useContext(Context);
  const {sidebar, setSidebar} = customContext;
//   ? Getting Windoe Location....
    const Location = useLocation();
  return (
    <>
    <div className={`dark:bg-slate-800 overflow-y-scroll h-screen fixed z-50 lg:static w-4/6 md:w-3/6 lg:w-1/6 ${sidebar?'':'hidden'} lg:block text-purple-600 bg-gray-200  dark:border-gray-500 border-gray-400 border-r`}>
        <div className='flex justify-center gap-10 items-center h-[8vh] md:text-4xl lg:text-2xl md:font-medium dark:border-gray-500 border-gray-400 border-b font-[Phudu]'>
        <h1>Admin-Dashboard</h1>
        <div className='lg:hidden'>
            <ClearIcon onClick={()=>{setSidebar(!sidebar)}}/>
        </div>
        </div>
        <div onClick={()=>{setSidebar(!sidebar)}} className='p-5 md:text-2xl lg:text-lg'>
            <h1 className='font-medium text-gray-400 mb-1'>Main</h1>
            <Link to={'/'} className={`flex justify-start items-center gap-3 hover:bg-gray-300 p-2 rounded ${Location.pathname==='/'&&'bg-gray-100'}`}>
                <DashboardIcon/>
                <div>Dashboard</div>
            </Link>
            <h1 className='font-medium text-gray-400 my-2'>Lists</h1>
            <div className="flex flex-col gap-3">
                <Link to={'/users'} className={`flex justify-start items-center gap-3 hover:bg-gray-300 p-2 rounded ${Location.pathname==='/users'&&'bg-gray-100'}  ${Location.pathname==='/users/userProfile'&&'bg-gray-100'}`}>
                    <GroupIcon/>
                    <div>Users</div>
                </Link>
                <Link to={'/newUser'} className={`flex justify-start items-center gap-3 hover:bg-gray-300 p-2 rounded ${Location.pathname==='/newUser'&&'bg-gray-100'}`}>
                    <PersonAddIcon/>
                    <div>Add New User</div>
                </Link>
                <div title='Page Not Created' className={`flex justify-start items-center gap-3 cursor-not-allowed hover:bg-gray-300 p-2 rounded ${Location.pathname==='/products'&&'bg-gray-100'}`}>
                    <StoreIcon/>
                    <div>Products</div>
                </div>
                <div title='Page Not Created' className={`flex justify-start items-center gap-3 cursor-not-allowed hover:bg-gray-300 p-2 rounded ${Location.pathname==='/orders'&&'bg-gray-100'}`}>
                    <AllInboxIcon/>
                    <div>Orders</div>
                </div>
                <div title='Page Not Created' className={`flex justify-start items-center gap-3 cursor-not-allowed hover:bg-gray-300 p-2 rounded ${Location.pathname==='/delivery'&&'bg-gray-100'}`}>
                    <LocalShippingIcon/>
                    <div>Delivery</div>
                </div>
            </div>
            <h1 className='font-medium text-gray-400 my-2'>Useful</h1>
            <div className="flex flex-col gap-3">
                <div title='Page Not Created' className={`flex justify-start items-center gap-3 cursor-not-allowed hover:bg-gray-300 p-2 rounded ${Location.pathname==='/stats'&&'bg-gray-100'}`}>
                    <LeaderboardIcon/>
                    <div>Stats</div>
                </div>
                <div title='Page Not Created' className={`flex justify-start items-center gap-3 cursor-not-allowed hover:bg-gray-300 p-2 rounded ${Location.pathname==='/notification'&&'bg-gray-100'}`}>
                    <NotificationsActiveIcon/>
                    <div>Notification</div>
                </div>
            </div>
            <h1 className='font-medium text-gray-400 my-2'>Services</h1>
            <div className="flex flex-col gap-3">
                <div title='Page Not Created' className={`flex justify-start items-center gap-3 cursor-not-allowed hover:bg-gray-300 p-2 rounded ${Location.pathname==='/health'&&'bg-gray-100'}`}>
                    <HealthAndSafetyIcon/>
                    <div>System Health</div>
                </div>
                <div title='Page Not Created' className={`flex justify-start items-center gap-3 cursor-not-allowed hover:bg-gray-300 p-2 rounded ${Location.pathname==='/logs'&&'bg-gray-100'}`}>
                    <PsychologyIcon/>
                    <div>Logs</div>
                </div>
                <div title='Page Not Created' className={`flex justify-start items-center gap-3 cursor-not-allowed hover:bg-gray-300 p-2 rounded ${Location.pathname==='/settings'&&'bg-gray-100'}`}>
                    <SettingsIcon/>
                    <div>Settings</div>
                </div>
            </div>
            <h1 className='font-medium text-gray-400 my-2'>User</h1>
            <div className="flex flex-col gap-3">
                <div title='Page Not Created' className={`flex justify-start items-center gap-3 cursor-not-allowed hover:bg-gray-300 p-2 rounded ${Location.pathname==='/profile'&&'bg-gray-100'}`}>
                    <AccountBoxIcon/>
                    <div>Profile</div>
                </div>
                <div title='Page Not Created' className={`flex justify-start items-center gap-3 cursor-not-allowed hover:bg-gray-300 p-2 rounded ${Location.pathname==='/log'&&'bg-gray-100'}`}>
                    <LogoutIcon/>
                    <div>Log Out</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};
