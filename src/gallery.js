import Carousel from "react-grid-carousel";
import CarouselItem from "./carouselItem";

function Gallery(){
    return (
        <Carousel 
        cols={1} 
        rows={1} 
        gap={0}
        autoplay={3000}
        loop>

            <Carousel.Item>
                <CarouselItem 
                image="https://picsum.photos/1920/1080?random=1"
                copy="Vær med fra starten!"
                ctaLink="/founders"
                ctaCopy="Klik her, hvis du vil være med"/>
            </Carousel.Item>

            <Carousel.Item>
                <CarouselItem 
                image="https://picsum.photos/1920/1080?random=2"
                copy="Vær med fra starten!"
                ctaLink="/news-letter"
                ctaCopy="Få gratis nyheder"/>
            </Carousel.Item>

            <Carousel.Item>
                <CarouselItem 
                image="https://picsum.photos/1920/1080?random=3"
                copy="Synes du også feta er den bedste ost?"
                ctaLink="/feta"
                ctaCopy="JA!"/>
            </Carousel.Item>

   

        </Carousel>
    )
}

export default Gallery;

//for at få det til at virke har vi skrevet 
// npm install react-grid-carousel i terminalen.