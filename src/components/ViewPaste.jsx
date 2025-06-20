import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const ViewPaste = () => {
  
  const {id:pasteId} =useParams();
  const allpaste = useSelector((state) => state.paste.pastes);
  const paste = allpaste.find((e) => e._id === pasteId);
  console.log(paste)
  return (
    <div className='flex flex-col w-[600px] h-[600px] bg-blue-600 mt-[50px] rounded-3xl'>
      <div className='flex items-center w-[100%] p-10 text-left text-5xl'>{paste.title}</div>
      <div className='text-white w-[100%] h-[inherit] overflow-auto rounded-br-3xl rounded-bl-3xl text-left p-10 pt-5 text-2xl bg-black '>{paste.content}</div>
    </div>
  )
}

export default ViewPaste
