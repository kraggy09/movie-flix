import useFetch from "../hooks/useFetch";
import Carousel from "./Carousel";

const Recommendation = ({ mediaType, id }) => {
  const { data, error } = useFetch(`/${mediaType}/${id}/recommendations`);
  const css = {
    content_wrapper:
      "w-full max-w-[1200px] my-0 mx-auto py-0 px-[20px] flex items-center justify-betweeen",
    text_container: "w-full flex items-center justify-between",
  };

  if (data?.results?.length > 0) {
    return (
      <div>
        <div id="content-wrapper" className={css.content_wrapper}>
          <div className={css.text_container} id="text-container">
            <span className="text-xl md:text-2xl lg:mt-16 mt-6 lg:text-3xl md:font-bold font-semibold ">
              Recommendation
            </span>
          </div>
        </div>
        <div className="md:h-[500px] h-[450px] my-12 flex items-center justify-center">
          <Carousel
            similar={mediaType}
            endpoint={data?.media_type}
            data={data?.results}
          />
        </div>
      </div>
    );
  }
};

export default Recommendation;
