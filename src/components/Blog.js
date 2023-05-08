import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/blogs?populate=image')
      .then((res) => res.json())
      .then((blogData) => setInfo(blogData.data))
      .catch((error) => console.log(error));
  }, []);

  const blogGrid = info.map((inf) => (
    <div style={{margin: '1rem 0'}} key={inf.id}>
      <h1>{inf.attributes.title}</h1>
      <p>{inf.attributes.date}</p>
      <img
        src={`http://localhost:1337${inf.attributes.image.data.attributes.url}`}
        alt=''
      />
      <p>{inf.attributes.body}</p>
      <hr style={{width: '80%', display: 'block', margin: '1rem auto'}} />
    </div>
  ));

  if (info.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Blog</h1>
      <section className='sort'>{blogGrid}</section>
    </>
  );
};

export default Blog;
