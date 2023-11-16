import './posts.css'
import CreatePost from './createPost/CreatePost'
import PostsList from './postsList/PostsList'
import PostView from './postView/PostView'
import PostEdit from './postEdit/PostEdit'
import { Link, Route, Routes } from 'react-router-dom'

export default function Posts() {

    return (
        <div className='posts'>
            <Routes>
                <Route path='/' element={
                    <>
                        <Link to='posts/new' className='button'>Создать пост</Link>
                        <PostsList />
                    </>} />
                <Route path='posts/new' element={<CreatePost />} />
                <Route path='posts/:postID' element={<PostView/>}/>
                <Route path='posts/:postID/edit' element={<PostEdit />}/>
            </Routes>
        </div>


    )
}