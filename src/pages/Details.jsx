import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import DetailsBanner from "../components/DetailsBanner";
import Cast from "../components/Cast";
import Videos from "../components/Videos";
import Similar from "../components/Similar";
import Recommendation from "../components/Recommendation";

const Details = () => {
  useFetch();
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: creditsData, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div className="relative">
      <DetailsBanner video={data?.results[0]} crew={creditsData?.crew} />

      <Cast data={creditsData?.cast} loading={creditsLoading} />

      <Videos data={data?.results} loading={loading} />

      <div className="lg:px-36 px-3">
        <Similar mediaType={mediaType} id={id} />
        <Recommendation mediaType={mediaType} id={id} />
      </div>
    </div>
  );
};

export default Details;
