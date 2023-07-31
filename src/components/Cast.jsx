import { useSelector } from "react-redux";
import Img from "./Img";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  const detailsContainer =
    "w-full flex flex-col lg:flex-row lg:items-center lg:justify-between overflow-x-auto scrollbar-hide lg:px-36  px-3";
  const sectionHeading =
    "text-xl md:text-2xl lg:text-3xl my-6 md:font-bold font-semibold ";

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <>
      {data?.length > 0 && (
        <div className={detailsContainer}>
          <div className="scrollbar-hide overflow-auto">
            <div className={sectionHeading}>Top Cast</div>
            {!loading ? (
              <div className="flex overflow-x-auto  h-full overflow-y-auto scrollbar-hide">
                {data?.map((item) => {
                  const imageUrl = item?.profile_path
                    ? url.profile + item.profile_path
                    : "";
                  return (
                    <div
                      className="flex lg:h-60 md:h-40 h-[20vh] w-[100vw] items-center justify-start lg:w-36 flex-col lg:items-center scrollbar-hide lg:justify-center"
                      key={item?.id}
                    >
                      <div id="img" className="rounded-full ">
                        <Img
                          className={"lg:h-24 w-[3rem] lg:w-auto rounded-full "}
                          src={
                            item?.profile_path
                              ? imageUrl
                              : "../../public/NoPP.png"
                          }
                        />
                      </div>
                      <div className=" w-[5rem] text-center mx-6 lg:w-auto">
                        {item?.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="castSkeleton">
                {skeleton()}
                {skeleton()}
                {skeleton()}
                {skeleton()}
                {skeleton()}
                {skeleton()}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cast;
