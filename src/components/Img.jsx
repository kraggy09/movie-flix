import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage
      className={className || "object-cover h-[60vh] lg:h-[70vh] w-[100vw]"}
      alt=""
      effect="blur"
      src={src}
    />
  );
};

export default Img;
