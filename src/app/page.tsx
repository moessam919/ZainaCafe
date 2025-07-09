import HomePanner from "./components/HomePanner";
import OurStory from "./components/OurStory";
import Video from "./components/Video";
import EveryCup from "./components/EveryCup";
import OurMenu from "./components/OurMenu";
import Testimonial from "./components/Testimonial";
import PhotoGallery from "./components/PhotoGallery";

export default function Home() {
    return (
        <div className="">
            <HomePanner />
            <OurStory />
            <PhotoGallery />
            <Video />
            <EveryCup />
            <OurMenu />
            <Testimonial />
        </div>
    );
}
