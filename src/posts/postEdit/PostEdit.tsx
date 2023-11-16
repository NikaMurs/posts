import { ChangeEvent, useEffect, useState } from 'react'
import './postEdit.css'
import { useNavigate, useParams } from 'react-router-dom'

export default function PostEdit() {
    const { postID } = useParams()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        id: 0,
        content: ''
    })

    function getData(url: string) {
        fetch(url)
            .then(responce => responce.json())
            .then(data => setForm(data.post))
    }

    useEffect(() => {
        getData(process.env.REACT_APP_URL + '/posts/' + postID)
    }, [])

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
            <label htmlFor="content">Редактирование публикации</label>
            <i className="fa-solid fa-xmark" onClick={onClose}></i>
            <div className='createPostForm'>
                <img className='postPersonAvatar' src="https://i.pravatar.cc/50" alt="" />
                <textarea name='content' placeholder='Напишите текст...' value={form.content} onChange={onChange} />
                <button>Сохранить</button>
            </div>
        </form>
    )
}