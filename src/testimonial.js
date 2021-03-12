import "./testimonial.scss";
import "./cards";

function Testimonials() {
    return (
        <section className="testimonials">

            <testimonialCard
            image="https://picsum.photos/1920/1080?random=1"
            copy="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, magnam tempora! Natus, facilis corporis. Nesciunt, obcaecati quis perferendis velit minima quod. Voluptate adipisci qui facilis harum deserunt pariatur atque dolores"
            />

            <testimonialCard
            image="https://picsum.photos/1920/1080?random=2"
            copy="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, magnam tempora! Natus, facilis corporis. Nesciunt, obcaecati quis perferendis velit minima quod. Voluptate adipisci qui facilis harum deserunt pariatur atque dolores"
            />

            <testimonialCard
            image="https://picsum.photos/1920/1080?random=3"
            copy="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, magnam tempora! Natus, facilis corporis. Nesciunt, obcaecati quis perferendis velit minima quod. Voluptate adipisci qui facilis harum deserunt pariatur atque dolores"
            />
        </section>
    )
}

export default Testimonials;