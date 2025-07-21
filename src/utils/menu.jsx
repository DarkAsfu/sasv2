const { data: projects, loading, error } = useFetch('https://api.sascorporationbd.com/api/projects/');

// Prepare dynamic services
const dynamicServiceItems = projects?.map(project => ({
  name: project.title,
  url: `/solutions/services/${project.slug}`
})) || [];

export default dynamicServiceItems;