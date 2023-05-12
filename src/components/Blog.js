import React, { useEffect, useState } from 'react';
import sanityClient from '../sanity';
import BlogBody from './BlogBody';

function Blog() {
  const [data, setData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "post"]')
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const infoGrid = data.map((inf) => (
    <section>
      <BlogBody title={inf.title} />
    </section>
  ));

  console.log(data);
  return (
    <div>
      {infoGrid}
    </div>
  );
}

export default Blog;
