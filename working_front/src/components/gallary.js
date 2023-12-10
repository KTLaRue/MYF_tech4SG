import { Fragment } from "react";
import { Link } from "react-router-dom";
import GalleryCard3 from "./gallery-card3";

export function Gallery() {
  return (
    <Fragment>
            <div className="main-gallery">
        <Link to="/recipes" className="group-redirect">
          <div className="gallery">
            <h1 className="gallery-heading heading2">
              Discover Nearby Stores
            </h1>
            <span className="gallery-sub-heading">
              Explore a wide range of stores near you
            </span>
            <div className="img-grid">
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1505066827145-34bcde228211?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxzdG9yZXN8ZW58MHx8fHwxNzAxMTM2MTMyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1561710309-9a739908b336?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI4fHxzdG9yZXN8ZW58MHx8fHwxNzAxMTM2MTMyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1513107132060-48f411aff83c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwMHx8c3RvcmUlMjBmcm9udHxlbnwwfHx8fDE3MDExMzYyNTh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1602254992120-5b3c3dad1d9d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHN0b3JlJTIwZnJvbnR8ZW58MHx8fHwxNzAxMTM2MTczfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1588110919463-73dfc27cacf6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjE3M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1506073869338-9d4cc16bae4c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjIzOHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1544059799-1e84c415f2d6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjE3M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1505066827145-34bcde228211?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjE5MHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjE5MHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1575842763096-d9dfa88e7f1e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ2fHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjE5MHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1601885086630-c356fca1be0b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ5fHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjIyMXww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1593290930536-9ada74584e4b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY3fHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjIyMXww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}
