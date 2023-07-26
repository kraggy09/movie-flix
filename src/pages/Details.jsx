import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import DetailsBanner from "../components/DetailsBanner";

const Details = () => {
  useFetch();
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: creditsData, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  console.log(data);
  console.log(creditsData);
  return (
    <div className="relative">
      <DetailsBanner video={data?.results[0]} crew={creditsData?.crew} />
    </div>
  );
};

export default Details;
