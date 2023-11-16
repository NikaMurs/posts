import { useNavigate, useParams } from 'react-router-dom'
import './postView.css'
import timeAgo from '../functions/timeAgo'
import { useEffect, useState } from 'react'

export default function PostView() {
    const { postID } = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState({
        id: 0,
        content: '',
        created: 0
    })

    function getData(url: string) {
        fetch(url)
            .then(responce => responce.json())
            .then(data => setData(data.post))
    }

    useEffect(() => {
        getData(process.env.REACT_APP_URL + '/posts/' + postID)
    }, [])


    function onChange(){
        navigate('/posts/' + postID + '/edit')
    }

    function onDelete() {
        fetch(process.env.REACT_APP_URL + '/posts/' + postID, {
            method: 'DELETE',
        })
        .then(()=>{navigate('/')})
    }



    return (
        <div className='post'>
            <div className='postPerson'>
                <img className='postPersonAvatar' src="https://i.pravatar.cc/50" alt="" />
                <div className='postPersonContent'>
                    <p className='postPersonName'>Ilnav Gayzov</p>
                    <p className='postPersonStatus'>Основатель группы<span className='postPersonTime'> · {timeAgo(data.created)}</span></p>
                </div>
            </div>
            <div className='postContent'>
                {data.content}
            </div>
            <div className='postButtons'>
                <button className='postButtonChange' onClick={onChange}>Изменить</button>
                <button className='postButtonDelete' onClick={onDelete}>Удалить</button>
            </div>
        </div>
    )
}