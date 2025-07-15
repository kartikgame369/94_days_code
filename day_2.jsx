import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return(
  <div>
    <button onClick={()=> setCount((count)=> count +1 )}>
      count is {count}
    </button>
  </div>
)
}
export default App
//  header components thats take props and render it inside the div 
//  
// function App(){
  
//   return (
//     <Fragment>
//       <button onClick={updatetitle}>update the title</button>
//       <Header title="kartik 1" />
//       <Header title="kartik 2" />
//       <Header title="kartik 3" />
//       <Header title="kartik 4" />
//       <Header title="kartik 5" />
//       <Header title="kartik 6" />
//       <HeaderWithButton />
//     </Fragment>
//   )
// }
// function HeaderWithButton(){
//   const [title, setTitle] = useState("my name is  kartik");
//   function updatetitle(){
//     setTitle("my name is " + Math.random())
//   }
//     return(
//       <div>
        
//         <header title={title}></header>
//       </div>
//     )
// }
// const Header = React.memo(function Header({ title }) {
//   return (
//     <div>
//       {/* <button onClick={updatetitle}>update the title </button> */}
//       {title}
//     </div>
//   );
// });
// const [name,setname] = useState("my name is karik");
// const [ description,setdescription] = useState("my description");
// function add_component(){
//   setname("my name is " + Math.random());
//   setdescription("my description is "+ Math.random());
// }
//  return (
//    <div>
//      <input type="text" placeholder='enter name' />
//      <input type="text" placeholder='description' />
//      <button onClick={add_component}>summit</button>
//    </div>
//  )
// }

// export default App
// function App() {
//   useEffect((function(){
//     console.log("use effect called");
//     alert("yes its working")
//   }))
//   return (
//     <Fragment>
//       <div>
//         <CardWrapper innerComponent={<TextComponent />} />
//       </div>
//       <div>
//         <CardWrapper innerComponent={<TextComponent />} />
//       </div>
//       <div>
//         <CardWrapper innerComponent={<TextComponent />} />
//       </div>
//     </Fragment>
//   );
// }

// function CardWrapper({ innerComponent }) {
//   return (
//     <div style={{ border: "2px solid black", padding: "10px" }}>
//       {innerComponent}
//     </div>
//   );
// }

// function TextComponent() {
//   return (
//     <div>
//       hi there
//     </div>
//   );
// }

// export default App
