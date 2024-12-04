import style from './Tags.module.css'
export default function Tags({ tags }) {


    return (
        <ul className={`${style.tags}`}>
            {tags.map((tag) => (
                <li className={`${style.tag_item} ${style[tag]}`} key={tag}>{tag}</li>
            ))}
        </ul>
    )
}