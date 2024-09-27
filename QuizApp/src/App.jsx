import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import questionData from './application.json'
function App() {
const [click,setClick]=useState(false); 
const [ques,setQues]=useState(0);
const [flag,setFlag]=useState(true);
const [option,setOption]=useState(""); 

const [ansFlag,setAnsFlag]=useState(null);
const prevQues=()=>{
if(ques>0 &&ques<=questionData.quiz.questions.length-1){
  setQues(ques-1);
  setOption(true);
  setAnsFlag(null);
  setFlag(true);
}
if(prev==0){
  
}

}

const nextQues=()=>{
if(questionData.quiz.questions.length>ques){
  setQues(ques+1);
  setOption(true);
  setAnsFlag(null);
  setFlag(true);
  
  if(questionData.quiz.questions.length-2==ques){
    setFlag(false);
  }
  else{
    setFlag(true);
  }
}
}
const handleOption=(val)=>{
  setAnsFlag(null);
setOption(val)
}

const check=()=>{
 const currentAns=questionData.quiz.questions[ques].answer;
 const selectedAns=questionData.quiz.questions[ques].options["ABCD".indexOf(option)];
 setAnsFlag(currentAns===selectedAns);
}

  return (
    <>
    <div className='min-h-screen w-full px-3 py-2 flex flex-col items-center  bg-black text-white font-serif'>
    <h1 className='text-lg font-bold  mt-10'>{questionData.quiz.title}</h1>
    <h3 className='mt-4 '>{questionData.quiz.description}</h3>
    <div className='w-96 h-auto mt-5 shadow-2xl bg-slate-800 flex flex-col rounded-md'>
    <p className='mt-5 ml-5 text-xl text-wrap'>Q{questionData.quiz.questions[ques].id}: {questionData.quiz.questions[ques].question}</p>
    
    <div className='flex flex-col mt-7 ml-5 text-lg'>
      <ul className='pl-3 pr-3 '>
        
        <button className={`w-full mb-2 border-2 pt-2 pb-2 border-black ${option==="A"?"bg-slate-900":null} 
        ${ansFlag&&option==='A'?"bg-green-600":""} ${ansFlag===false &&option==='A'?"bg-red-600":""}`} onClick={()=>handleOption("A")}><li className=''>A) {questionData.quiz.questions[ques].options[0]} </li></button>
        <button className={`w-full mb-2 border-2 pt-2 pb-2 border-black ${option==="B"?"bg-slate-900":null} 
        ${ansFlag&&option==='B'?"bg-green-600":""} ${ansFlag===false &&option==='B'?"bg-red-600":""}`} onClick={()=>handleOption("B")} ><li className=''>B) {questionData.quiz.questions[ques].options[1]} </li></button>
        <button className={`w-full mb-2 border-2 pt-2 pb-2 border-black ${option==="C"?"bg-slate-900":null}  
        ${ansFlag&&option==='C'?"bg-green-600":""} ${ansFlag===false &&option==='C'?"bg-red-600":""}`} onClick={()=>handleOption("C")}><li className=''>C) {questionData.quiz.questions[ques].options[2]} </li></button>
        <button className={`w-full mb-2 border-2 pt-2 pb-2 border-black ${option==="D"?"bg-slate-900":null} 
        ${ansFlag&&option==='D'?"bg-green-600":""} ${ansFlag===false &&option==='D'?"bg-red-600":""}`} onClick={()=>handleOption("D")}><li className=''>D) {questionData.quiz.questions[ques].options[3]} </li></button>
</ul>
    </div>
    <div className='flex justify-between mt-10 text-black'>
      <button className={`bg-white rounded-xl ml-2 w-20 mb-4`}  onClick={ques!=0?prevQues:null}>Prev</button>
      <button className={`bg-white rounded-xl ml-2 w-20 mb-4`}  onClick={check}>Check</button>
      <button className={`bg-white rounded-xl mr-2 w-20 mb-4`} onClick={flag ? nextQues : null} >{flag?"Next":"Submit"}</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
