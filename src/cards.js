import "./cards.scss";


function Cards({ image, copy }) {
    return(
    <article className="testimonialCard">
        <img src={image} alt="" className="testimonialCard__image"/>

        <p className="testimonialCard__copy">{copy}</p>
    </article>

    );
}

export default Cards;