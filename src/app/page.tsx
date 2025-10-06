import OurStory from "./components/OurStory";
import Video from "./components/Video";
import EveryCup from "./components/EveryCup";
import OurMenu from "./components/OurMenu";
import Testimonial from "./components/Testimonial";
import PhotoGallery from "./components/PhotoGallery";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
    return (
        <div className="">
            <HomeBanner />
            <OurStory />
            <PhotoGallery />
            <Video />
            <EveryCup />
            <OurMenu />
            <Testimonial />
        </div>
    );
}
