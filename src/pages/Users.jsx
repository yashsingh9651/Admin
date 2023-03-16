import React, { useContext} from 'react';
import {Link} from 'react-router-dom';
import { DataGrid} from '@mui/x-data-grid';
import {userColumns} from '../data/dataTable';
import Context from '../context/Context';
export const Users = () => {
  // ?Calling Some Fumction From Context...
  const customContext = useContext(Context);
  const {data, setData,settingUserData} = customContext;
  // ? Deleting UserData...
  const handleDelete = (id) => {
    const index = data.findIndex((item)=>item.id === id)
    const tempData= [...data];
    tempData.splice(index,1);
    console.log(tempData);
    setData(tempData);
  };
  // ? dding Some  More Data...
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex gap-2">
            <Link onClick={()=>{settingUserData(params.row.id)}} to="/users/userProfile">
              <div className="p-1 border border-green-600 text-green-600 rounded cursor-pointer">View</div>
            </Link>
            <div
              className="p-1 border border-red-600 text-red-600 rounded cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ]; 
  return (
    <>
    <div className='dark:bg-gray-400 rounded customShadow' style={{height:550,width:'100%'}}>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </>
  )
};
