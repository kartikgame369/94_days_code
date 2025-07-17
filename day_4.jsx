import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {

//   // const [count, setCount] = useState(0)
//   // const [exhangedata , setexhangedata] = useState({});
//   // const [bankdata , setbankdata]= useState({});
//   // useEffect(()=>{
//     // fetch("https://google.com",async (res)=>{
//     // const json = await res.json();
//     // setbankdata({income: 100});
// //  },[])

//   // useEffect(()=>{
//     // setTimeout(() => {
//     // setexhangedata({
//       // return : 100
//     // })
//   // }, 1000);
// //  },[])
  

//   // const incometax = (bankdata.income + exhangedata.return)*0.3;

// // return (
//   <div>
//     {/* <button onClick={()=>setCount((count)=> count+1 )}>count is {count}</button> */}
//     {/* // hi there your icome tax returns are {incometax}  */}

//   </div>


//  }
function App(){
  const [input,setinput]=useState(0)
  let expensivevalue = 1;
  for(let i =1 ; i<= input; i++){
    expensivevalue=expensivevalue * i;
  }
  return(
    <div>
      <input type="text" value={input} onChange={(e)=> setinput(Number(e.target.value))} />
      <p>calculate value:{expensivevalue}</p>

    </div>
  )
}

export default App
