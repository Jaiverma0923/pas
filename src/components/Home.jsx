import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { useEffect } from 'react';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams("");
    const pasteId = searchParams.get("pasteId")
    const dispatch = useDispatch();
    const allpaste = useSelector((state) => state.paste.pastes);
    useEffect(() => {
        if (pasteId) {
            const paste = allpaste.find((e) => e._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content)
        }

    }, [pasteId])
    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }


        if (pasteId) {
            dispatch(updateToPastes(paste))
        }
        else {
            dispatch(addToPastes(paste))
        }
        setTitle('');
        setValue('');
        setSearchParams({});
    }
    return (
        <div className='w-[40vw] '>
            <div className='w-[100%] flex gap-10 items-center justify-between mt-10 mb-10 '>
                <input className=' w-[25vw] bg-black placeholder:text-white p-5  rounded-2xl'
                    type="text"
                    placeholder='enter title here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={createPaste}>
                    {pasteId ? "Update my Paste" : "Create my Paste"}
                </button>

            </div>
            <div>
                <textarea className='p-5 w-[100%] h-[70vh] overflow-auto content text bg-black placeholder:text-white   rounded-[20px]'
                    type="text"
                    placeholder='Write Here...'
                    wrap='hard'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>

        </div>

    )
}

export default Home 