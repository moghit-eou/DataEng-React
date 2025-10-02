
import styles from '../assets/Card.module.css';

type Props = {
    title?: string;
    message?: string;
}

function Card({
    title = "Project in progress",
    message = "This project is currently under development. Please check back later for updates."
}: Props) {

    return (
        <div>
            <div className={styles.card}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.message}>{message}</p>
            </div>
        </div>
    );


}

export default Card;