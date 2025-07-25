import useFetch from "./useFetch";

const useBlogsMenuItems = () => {
  const { data: blogs, loading, error } = useFetch(`https://api.sascorporationbd.com/api/blogs/featured/`);

  const items = blogs?.map(blog => ({
    name: blog.title,
    url: `blogs/${blog?.id}`,
  })) || [];

  return { items, loading, error };
};

export default useBlogsMenuItems;
