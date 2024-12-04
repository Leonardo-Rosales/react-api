import style from './Card.module.css'
import Button from '../Button/Button'
import placeHolder from '../../assets/placeholder.png'
import Tags from '../Tags/Tags'
import { API_BASE_URI } from '../Main';

export default function Card({ post, deletePost, title, image, content }) {

    return (
        <div className={style.card}>
            <img className={style.image} src={image ? API_BASE_URI + image : placeHolder} alt={title} />
            <div className={style.card_body}>
                <h3 className={style.card_title}>{title}</h3>
                <Tags tags={tags} />
                <div>{category}</div>
                <p className={style.card_description}>{content}</p>
                <Button text="Leggi di più" />
                <button
                    className={style.deleteButton}
                    onClick={() => deletePost(id)}
                >
                    Elimina
                </button>
            </div>
        </div>
    );
}