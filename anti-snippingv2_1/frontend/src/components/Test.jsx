import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../store'
function Test() {
    const data =useSelector((state)=>state.main.value
    )
    const dispatch = useDispatch()
    useEffect(()=>{
        const loadData =async()=>
        {
            const postId =Math.floor(Math.random)
            const dataRaw =await fetch('https://jsonplaceholder.typicode.com/posts/')
            if(!dataRaw.ok){
                dispatch(setData('Ошибка загрузки'))
                return
            }
            const dataJson=await dataRaw.json()
            dispatch(setData(dataJson.body))
        }
        loadData()
    },[])
  return (
    <div>
        <h1>Test</h1>
    <header>
        {!data&&<p>...wait...</p>}
        
        {data&&<p>...wait...</p>}
    </header>
    
    </div>
  )
}

export default Test