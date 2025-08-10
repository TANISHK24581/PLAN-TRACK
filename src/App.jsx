import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [count, setCount] = useState(0)
  const [Todo, setTodo] = useState("")
  const [Arr, setArr] = useState([])
  const [Temp, setTemp] = useState("")
  const [Checkk, setCheckk] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("Todo")){

      let Arr1=JSON.parse(localStorage.getItem("Todo"))
      setArr(Arr1)
    
    }
    
  }, [])

  useEffect(() => {
  localStorage.setItem("Todo", JSON.stringify(Arr));
}, [Arr]);

  




  const edit = (e) => {
    setTemp(e);
    
    // let i;
    // for (let index = 0; index < Arr.length; index++) {
    //   const element = Arr[index];
    //   if (element.id == e) {
    //     i = index;
    //     break;
    //   }

    // }
    setTodo(e)
    





  }
  const deletee = (e) => {
    console.log(Arr)
    setArr(Arr.filter(todo => todo.id !== e));
    



  }
  const add = () => {
    let i = -1
    for (let index = 0; index < Arr.length; index++) {
      const element = Arr[index];
      if (element.Todo == Temp) {
        i = index;
        break

      }

    }
    if (i == -1) {
      setArr([...Arr, { id: uuidv4(), Todo, iscompleted: false }])
      setTodo("")

    }
    else {
      let r = [...Arr];
      r[i].Todo= Todo;
      setArr(r)
      console.log(Arr)
      setTodo("")
      setTemp("")

    }
   




  }

  const change = (e) => {
    setTodo(e.target.value)



  }
  const check = (e) => {
    let i;
    for (let index = 0; index < Arr.length; index++) {
      const element = Arr[index];
      if (element.id == e) {
        i = index;
        break;
      }

    }
    let u = [...Arr];
    u[i].iscompleted = !u[i].iscompleted;
    setArr(u)
    console.log(Arr)
  

  }

  const Checkkk = () => {
    setCheckk(!Checkk)


  }

  return (
    <>
      <Navbar />



      <div className="md:container add  md:mx-auto md:max-w-[55vw] md:my-5 md:min-h-[80vh]  md:rounded-xl md:bg-violet-100">

        <div className="add text-center mr-9 pt-2.5 text-xl  md:text-2xl  font-extrabold font-sans ml-16">PlanTrack – Plan, Track, and Complete</div>

        <div className="add ml-9 text-sm md:text-lg pt-5 md:pt-11 pb-1 font-extrabold font-sans md:ml-15 ">Add a Todo</div>
        
        <div className="form px-4 text-center ">
          <input onChange={change} value={Todo} className='bg-white add w-8/9 md:w-7/9 rounded-[7px] h-6 md:h-9  p-2  md:mx-5' type="text" />
          <button className='text-white add font-bold mt-2 md:mx-2  md:p-2 px-4 rounded-xl bg-violet-800 hover:bg-violet-900' onClick={() => { add() }} disabled={Todo.length<1}> Add</button>
        </div>
        <div className='flex gap-2 mt-10 ml-5 md:mt-5 md:ml-10'>
          <input onChange={Checkkk} type="checkbox" name="" checked={Checkk} id="" />
          <div className="texttt">Show Completed </div>
          
        </div>

        <div className="todo add text-lg font-extrabold font-sans mt-7 md:mt-4  mb-4 px-5 md:px-10">Your Todos</div>







        {Arr.map(i => (
            (Checkk && i.iscompleted || !Checkk) && <div key={i.id} className="space flex justify-between gap-4 ml-7 md:ml-18 mt-4 items-start">
            <div className="firstt flex text-lg mt-1.5  ">
              <div><input onChange={() => { check(i.id) }} type="checkbox" checked={i.iscompleted}  name="" id="" /></div>
              <div className={`list px-4 max-w-[100px] md:max-w-[450px] overflow-hidden break-words ${i.iscompleted ? "line-through" : ""}`}>{i.Todo}</div>
            </div>
            <div className="secondd flex  md:gap-2 mr-10">
              <button className='text-white add  add mx-2 p-2 px-4 rounded-xl bg-violet-800 hover:bg-violet-900' onClick={() => { edit(i.Todo) }} ><FaEdit /></button>
              <button className='text-white add mx-2 p-2 px-4 rounded-xl bg-violet-800 hover:bg-violet-900' onClick={() => { deletee(i.id) }}><MdDelete /></button>
            </div>

          </div>

        ))}







      </div>




    </>
  )
}

export default App
