import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [length1,setLength]=useState(8);
 const [number,setNumber]=useState(false);
 const [character,setCharacter]=useState(false);
const [password,setPassword]=useState("");
const passwordCopy=useRef();
const [isCopy,setCopy]=useState(false);

const passwordGenerator=useCallback(()=>{
let str="ABCDEFGHIJKLMNOPQRSTUWVXYZabcdefghijklmnoprstvuwxyz"
let temp="";
if(number){
  str+="123456789";
}
if(character){
  str+="~!@#$%^&*(){}"
}
for(let i=1;i<=length1;i++){
let char=Math.floor(Math.random()*str.length+1);
temp+=str[char];
}
setPassword(temp);
},[setPassword,length1,number,character]);
useEffect(()=>{
  passwordGenerator();
},[number,character,length1,passwordGenerator])

const copy=useCallback(()=>{
  
  if(passwordCopy.current &&isCopy){
    passwordCopy.current.focus();
    passwordCopy.current?.select()
    passwordCopy.current?.setSelectionRange(0,password.length);
  }
    window.navigator.clipboard.writeText(password);
    setCopy(true);
  setTimeout(()=>setCopy(false),1000)

},[password])
  return (
   <>
   <div className="w-full min-h-screen bg-black px-3 py-2 flex justify-center">
        <div className='shadow-xl  h-36 w-96 bg-slate-600 flex flex-col rounded-md'>
      <h2 className='font-bold font-sans text-white text-center px-3 py-2'>Password Generator</h2>
      <div className='ml-8 mt-3 '>
        <input
        type="text"
        value={password}
        readOnly
        ref={passwordCopy}
        className='px-6 py-5 w-60 h-10 rounded-md '
        />
        <button className={` px-4 py-2 ml-1 rounded-md ${isCopy?"bg-blue-400":"bg-blue-600"}`} onClick={copy}>Copy</button>
      </div>
      <div className='flex justify-between ml-3 mt-3 mr-3'>
        <input type="range" min={8} max={100}
        value={length1}
        onChange={(e)=>setLength(e.target.value)}
        />
        <h5>length({length1})</h5>
        <div>
          <input type="checkbox" defaultChecked={number} onChange={()=>{setNumber(prev=>!prev)}} id="length"/>
          <label htmlFor='length'>Length</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked={character} onChange={()=>{setCharacter(prev=>!prev)}} id="Character"/>
          <label htmlFor='Character'>Character</label>
        </div>
      </div>
        </div>

   </div>
   </>
  )
}

export default App
