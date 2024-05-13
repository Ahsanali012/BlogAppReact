import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { fetchBlogs } from "../../Redux/Features/Blogs/BlogSlice";
import Card from "../Blogs/Card";

const PostCards = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = currentPage * blogsPerPage;

  console.log("startIndex-->",startIndex)
  console.log("endIndex-->",endIndex)

  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );



  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  console.log("blogs--->",blogs)

  

  return (
    <div className="w-full lg:w-2/3">
      {!isError && !isLoading && paginatedBlogs?.length > 0 ? (
        <div>
          {paginatedBlogs.map((blog, index) => (
            <Card blog={blog} key={index} />
          ))}
          {/* {Pagination} */}
          <div className="space-x-2">
            <button
              className="px-2 bg-red-500 text-white rounded cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>{currentPage}</span>
            <button
              className="px-2 bg-indigo-500 text-white rounded cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
        
          No blogs found!
            {/* {Pagination} */}
            <div className="">
            <button
              className="px-2 bg-red-500 text-white rounded cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>{currentPage}</span>
            <button
              className="px-2 bg-indigo-500 text-white rounded cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
               disabled={endIndex>=blogs.length}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCards;
