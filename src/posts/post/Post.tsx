import './post.css'
import { PostItem } from '../../Types'
import timeAgo from '../functions/timeAgo'
import { useNavigate } from 'react-router-dom'

export default function Post({data}: {data: PostItem}){
    const navigate = useNavigate()

    return (
        <div className='post'  onClick={()=>{navigate(`/posts/${data.id}`)}}>
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
        </div>
    )
}