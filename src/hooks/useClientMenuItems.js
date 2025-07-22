import useFetch from "./useFetch";

const useClientMenuItems = () => {
  const { data: clients, loading, error } = useFetch('https://api.sascorporationbd.com/api/our_clients/');

  const items = clients?.map(client => ({
    name: client.name,
    url: client?.url,
  })) || [];

  return { items, loading, error };
};

export default useClientMenuItems;
