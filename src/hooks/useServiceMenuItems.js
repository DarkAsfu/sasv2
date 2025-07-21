import useFetch from "./useFetch";

const useServiceMenuItems = () => {
  const { data: projects, loading, error } = useFetch('https://api.sascorporationbd.com/api/projects/');

  const items = projects?.map(project => ({
    name: project.project_name,
    url: `/services/${project.id}`,
  })) || [];

  return { items, loading, error };
};

export default useServiceMenuItems;
