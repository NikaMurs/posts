import './postsList.css'
import Post from '../post/Post'
import { PostItem } from '../../Types';
import { useEffect, useState } from 'react';

export default function PostsList(){

    const [data, setData] = useState<Array<PostItem>>()
        function getData(url: string){
            fetch(url)
            .then(responce => responce.json())
            .then(data => setData(data))
        }
    
    useEffect(()=>{
        getData(process.env.REACT_APP_URL + '/posts')
    }, [])

    return (
        <div className='postsList'>
            {data?.map((item)=>{
                return <Post data={item} key={item.id}/>
            })}
        </div>
    )
}