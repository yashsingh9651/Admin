import React,{useState} from 'react';
import { userRows } from '../data/dataTable';

export const NewUser = () => {
    const [newUser, setNewUser] = useState({
        id:Math.floor(Math.random()*10+10),
        username:'',
        img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email:'',
        age:''
    });
    // ? Hnadling Onchange ...
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
      setNewUser({...newUser,[name]:value})
    };
    // ? Pushing The new User Data to Data Table ...
    const pushNewUserData = (e) => {
        e.preventDefault();
        const {username,age,email}=newUser;
        if(username&&email&&age){
            userRows.push(newUser);
            setNewUser({
              id:Math.floor(Math.random()*10+10),
              username:'',
              img:"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              status: "active",
              email:'',
              age:''
          })
        }
    };
  return (
    <>
    <form className="w-full customShadow rounded p-3">
        <div className='flex gap-5'>
            <div><label htmlFor="username">Name: </label><input required onChange={handleChange} className="bg-gray-200 text-purple-600 rounded outline-none p-1" type="text" value={newUser.username} name='username' /></div>
            <div><label htmlFor="age">Age: </label><input required onChange={handleChange} className="bg-gray-200 text-purple-600 rounded outline-none p-1" type="number" value={newUser.age} name='age' /></div>
        </div>
        <div><label htmlFor="email">Email: </label><input required onChange={handleChange} className="bg-gray-200 my-5 w-2/6 text-purple-600 rounded outline-none p-1" type="email" value={newUser.email} name='email'/></div>
        <button type='submit' onClick={pushNewUserData} className='p-1 bg-green-600 rounded'>Add New User</button>
    </form>
    </>
  )
}
