import { ChangeEvent, useState } from 'react'
import './createPost.css'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        id: 0,
        content: ''
    })

    function onChange({ target }: ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = target
        setForm((prevForm) => ({ ...prevForm, [name]: value }))
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        fetch(process.env.REACT_APP_URL + '/posts', {
            method: 'POST',
            body: JSON.stringify(form)
        })
            .then(() => { navigate('/') })
    }

    function onClose() {
        navigate('/');
    }

    return (
        <form className='createPost' onSubmit={onSubmit}>
            <label htmlFor="content">Создание нового поста</label>
            <i className="fa-solid fa-xmark" onClick={onClose}></i>
            <div className='createPostForm'>
                <img className='postPersonAvatar' src="https://i.pravatar.cc/50" alt="" />
                <textarea name='content' placeholder='Напишите текст...' onChange={onChange} />
                <button>Опубликовать</button>
            </div>
        </form>
    )
}