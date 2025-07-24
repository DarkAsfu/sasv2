import useFetch from "./useFetch";

const useContactInfo = () => {
  const { data: contactinfo, loading, error } = useFetch('https://api.sascorporationbd.com/api/sas_info/1/');

  return { contactinfo, loading, error };
};

export default useContactInfo;
