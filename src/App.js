import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchData } from './store/dataSlice'
import { useDispatch, useSelector } from 'react-redux';
import { addData, fetchTryData } from './store/trySlice';
  // https://jsonplaceholder.typicode.com/users

  
const App=() =>{
  const dispatch=useDispatch();
  const[text,setText]=useState("Hello World")
  const [user,setUser]=useState({
    email:"",
    password:""
  })
// const {data,status}=useSelector((state)=>state.apiData)
// console.log(data,status)
useEffect(() => {
  // dispatch(fetchData())
  dispatch(fetchTryData())
},[])


const handleChange=(e)=>{
  let name=e.target.name;
  let value=e.target.value
  setUser({...user,[name]:e.target.value})
}

const sumit=(e)=>{
  let name=e.target.name;
  let value=e.target.value
  e.preventDefault()
  dispatch(fetchTryData({...user}))
  console.log({...user})
}
let newArray=text.split('');
let changeArray=[]
console.log(changeArray);
const onChangeHandle=(e)=>{
  const onChangeLength=e.target.value;
  changeArray.push(onChangeLength.slice(-1))
  const newLength=onChangeLength.length
  if(newArray[newLength-1]===changeArray[newLength-1]){
    console.log(newArray[newLength-1],"match")
    
  }else{
    console.log(newArray[newLength-1],"not match",)
  }
}

  return (
    <>
      {/* <button onClick={()=>dispatch(fetchData(1))}>getdata</button> */}
      <form method="POST" onSubmit={sumit}>
        <input type="text" name="email" value={user.email}  onChange={handleChange} />
        <input type="text" name="password" value={user.password} onChange={handleChange} />
        <button type='submit'>click</button>
      </form>
      <p>{text}</p>
      <textarea type="text" onChange={onChangeHandle}>

      </textarea>
    </>
  )
}

export default App;
