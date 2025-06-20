import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import edit from '../assets/edit.svg'
import view from '../assets/view.svg'
import del from '../assets/delete.svg'
import copy from '../assets/copy.svg'
import { removeFromPastes } from '../redux/pasteSlice'
import toast from 'react-hot-toast'


const Paste = () => {
  const [search, setSearch] = useState("");
  const paste = useSelector((state) => state.paste.pastes)
  const dispatch = useDispatch();
  const filterData = paste.filter(
    (paste) => paste.title.toLowerCase().includes(search.toLowerCase()) || paste.content.toLowerCase().includes(search.toLowerCase())
  )

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId))
  }


  return (
    <div>
      <h1 className='mt-10'>ALL PASTES</h1>
      <input className='m-10 bg-black p-5 w-2xl rounded-2xl h-[50px]'
        type="text"
        placeholder='Search here...'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <div className='flex gap-10 flex-wrap justify-center'>
        {
          filterData.length > 0 &&
          filterData.map(
            (paste) => {
              return (
                <div className=' overflow-hidden rounded-2xl p-3 pt-2 w-[600px] h-[400px] bg-black' key={paste?._id}>
                  <div className='flex items-center justify-between'>
                    <div className=' text-left text-2xl w-[350px]'>{paste.title}</div>
                    <div className='flex  gap-[10px] w-[250px]'>
                      <button><a href={`/pastes/${paste?._id}`}><img src={view} alt="view" /></a></button>
                      <button><a href={`/?pasteId=${paste?._id}`}><img src={edit} alt="edit" /></a></button>
                      <button onClick={()=>handleDelete(paste?._id)}><img src={del} alt="del" /></button>
                      <button onClick={() => {navigator.clipboard.writeText(paste?.content),toast.success("content copied")}}><img src={copy} alt="del" /></button>
                    </div>
                  </div>
                  <div className='text-left mt-3 '>{paste.content}</div>
                </div>

              )

            }
          )
        }

      </div>
    </div>

  )

}

export default Paste
