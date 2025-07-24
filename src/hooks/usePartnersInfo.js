import useFetch from "./useFetch";

const usePartnersInfo = () => {
  const { data: partners, loading, error } = useFetch('https://api.sascorporationbd.com/api/our_clients/');

  return { partners, loading, error };
};

export default usePartnersInfo;
