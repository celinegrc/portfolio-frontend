import styles from "../styles/tags.module.scss"


export default function Tags({tagName}) {
    return(
        <div>
            <span className={styles.tags}>
                {tagName}
            </span>
         </div>
       
    )
}