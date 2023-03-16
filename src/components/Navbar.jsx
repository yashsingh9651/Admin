import React,{useEffect,useState,useContext} from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
import Context from "../context/Context";
export const Navbar = () => {
  const customContext = useContext(Context);
  const {sidebar, setSidebar} = customContext;
    // ? Handeling Dark Mode ....
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkMode = () => {
        if(darkMode){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }      
    }
    useEffect(() => {
      handleDarkMode();
    }, [darkMode])
  return (
    <div className="dark:bg-slate-800 bg-gray-200 h-[8vh] text-purple-600 flex items-center justify-between dark:border-gray-500 border-gray-400 border-b md:px-4 px-1">
      <div className="lg:hidden md:text-4xl">
        <ListIcon sx={{fontSize:'inherit'}} onClick={()=>{setSidebar(!sidebar)}}/>
      </div>
      <div className="dark:bg-gray-200 bg-white w-[40%] rounded flex items-center">
        <div className="w-full">
            <input
              type="text"
              placeholder="Seach..."
              className="rounded outline-none bg-white w-full dark:bg-gray-200 p-1"
            />
        </div>
        <SearchIcon sx={{fontSize:'inherit'}}/>
      </div>
      <div className="flex gap-1 md:gap-3 items-center cursor-pointer md:text-3xl lg:text-xl">
        <div className="flex items-center gap-1">
            <LanguageIcon sx={{fontSize:'inherit'}} titleAccess="Language"/>
            <div className="hidden md:block">English</div>
        </div>
        {/* Drak Mode Button */}
            {darkMode?<LightModeIcon sx={{fontSize:'inherit'}} onClick={()=>{setDarkMode(!darkMode)}}/>:<DarkModeIcon onClick={()=>{setDarkMode(!darkMode)}}/>}
            <NotificationsActiveIcon sx={{fontSize:'inherit'}} titleAccess="Notification"/>
            <ChatBubbleIcon sx={{fontSize:'inherit'}} titleAccess="Chat"/>
            <div>
                <img className="rounded-full cover h-9 w-9" src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            </div>
      </div>
    </div>
  );
};
