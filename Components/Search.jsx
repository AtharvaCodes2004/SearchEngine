import React from 'react'
import { Links } from './Links'
import { useEffect, useState } from 'react'
import {useDebounce} from 'use-debounce'
import {useResultContext} from '../contexts/ResultContextProvider'

export const Search = () => {
    const [text, setText] = useState('Google')
    const {setSearchTerm} = useResultContext()
    const {debouncedValue} = useDebounce()

    useEffect(()=>{
        if(debouncedValue) setSearchTerm(debouncedValue)
    },[debouncedValue])
  return (
    <div className='relative sm:ml-48 md:ml-72 sm:mt-10 mt-3'>
        <input
            value={text}
            type = "text"
            className='sm:w-96 w-80 h-10 dark:bg-gray-10000 border rounded-full text-black'
            placeholder='Search'
            onChange={(e)=> setText(e.target.value)}
        />
        {text !== '' && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )}
        <Links/>
    </div>
  )
}
