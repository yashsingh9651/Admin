import {useState} from 'react';
import Context from './Context';
import { userRows } from '../data/dataTable';
const StateContext = ({children}) => {
    const [sidebar, setSidebar] = useState(false);
    const [data, setData] = useState(userRows);
    // ? Handeling Fiunction on Click of view button on Users Table...
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData'))||2);
    const settingUserData= (id) => {
      const index = userRows.findIndex((item)=>item.id === id);
      const recievedData = data[index];
      setUserData(recievedData);
      localStorage.setItem('userData',JSON.stringify(recievedData));
    }
  return (
    <Context.Provider value={{sidebar,setSidebar,data,setData,settingUserData,userData}}>
        {children}
    </Context.Provider>
  )
};
export default StateContext;