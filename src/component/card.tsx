
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

        </div>
    );


}

export default Card;