import axios from 'axios'
import { useState, useEffect } from 'react';
import Card from './Card/Card';
import Tags from './Tags/Tags';
import Button from './Button/Button';

const initialFormData = {
    title: '',
    image: '',
    content: '',
    tags: '',
    category: '',
    published: true
}

export const API_BASE_URI = 'http://localhost:3000/'

export default function Main() {
    // const [posts, setPosts] = useState(initialPosts)
    const [posts, setPosts] = useState([])
    const [publishedPosts, setPublishedPosts] = useState([])
    const [tags, setTags] = useState([])
    const [formData, setFormData] = useState(initialFormData)

    useEffect(() => {
        setPublishedPosts(posts.filter((post) => post.published === true))
        const tagsItems = []
        posts.forEach(post => {
            const postTags = post.tags
            console.log(postTags)
            postTags.forEach((tag) => {
                if (!tagsItems.includes(tag)) {
                    tagsItems.push(tag)
                }

            })
        })
        setTags(tagsItems)
    }, [posts])

    useEffect(() => {
        console.log(`Stai creando un post ${formData.published ? 'pubblico' : 'non pubblico'}`)
    }, [formData.published])


    function fetchPosts() {
        axios.get(`${API_BASE_URI}posts`, {
            params: {
                tags: ''
            }
        })
            .then(res => {
                setPosts(res.data)
            })

            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    function addPost(e) {
        e.preventDefault()

        const post = {
            // id: Date.now(),
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim())
        }
        // setPosts([...posts, post])
        // setFormData(initialFormData)
        axios.post(`${API_BASE_URI}posts`, post)
            .then(res => {
                setPosts([...posts, res.data])
                setFormData(initialFormData)
            })
            .catch(err => {
                alert(err.response.data.messages.join(' '))
                console.error(err)
            })
    }
    // function deletePost(id) {
    //     setPosts(posts.filter(post => post.id !== id))
    // }
    function handleFormData(e) {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    return (
        <main>
            <section>
                <div className="container form-container">
                    <form onSubmit={addPost} action="" className='form'>
                        <div>
                            <label htmlFor="title">Titolo</label>
                            <input onChange={handleFormData} id='title' name='title' value={formData.title} type="text" placeholder='Titolo del post' />
                        </div>
                        <div>
                            <label htmlFor="image">Immagine (src)</label>
                            <input onChange={handleFormData} type='text' name="image" id="image" value={formData.image} placeholder='Immagine del post' />
                        </div>
                        <div>
                            <label htmlFor="category">Categoria</label>
                            <select value={formData.category} onChange={handleFormData} name="category" id="category">
                                <option value="">Seleziona categoria</option>
                                <option value="backend">Backend</option>
                                <option value="frontend">Frontend</option>
                                <option value="express">Express</option>
                                <option value="react">React</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="content">Contenuto</label>
                            <textarea onChange={handleFormData} value={formData.value} name="content" id="content" placeholder='Contenuto del post'></textarea>
                        </div>
                        <div>
                            <label htmlFor="tags">Tags</label>
                            <input onChange={handleFormData} id='tags' type="text" value={formData.tags} name='tags' placeholder='Tag del post' />
                        </div>
                        <div>
                            <input onChange={handleFormData} type="checkbox" checked={formData.published} id='published' name='published' />
                            <label htmlFor="published">Pubblicato</label>
                        </div>
                        <button>Salva</button>
                    </form>
                </div>

                <div className="container">
                    <Tags tags={tags} />
                </div>
                <div className="container">
                    <div className="row">
                        {publishedPosts.map((el) => (
                            <div key={el.id} className="col-4">
                                <Card
                                    published={el.published}
                                    title={el.title}
                                    image={el.image}
                                    content={el.content}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
