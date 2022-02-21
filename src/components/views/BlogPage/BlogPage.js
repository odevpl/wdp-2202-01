import React from 'react';
import styles from './BlogPage.module.scss';

const BlogPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.blog}>
        <div className='container'>
          <h1>Blog</h1>
          <div className='row'>
            <div className={`col-9 ${styles.blogContent}`}>
              <h2>Welcome to the new website!</h2>
              <img
                className='welcome'
                src='/images/blog/blog-welcome.jpg'
                alt='welcome'
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quisquam
                laborum explicabo provident magnam. Ipsa fugiat voluptates maiores
                quibusdam assumenda. Nostrum aperiam deserunt molestiae fugit porro
                incidunt veniam dicta nam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                perferendis magni rerum consequatur repellendus! Vel, nobis. Sit,
                maiores! Adipisci aperiam fugiat delectus accusantium sapiente? Mollitia
                facilis aliquam quidem perferendis atque?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At facilis
                ullam dolorem earum aliquam totam, atque labore enim, nihil quaerat
                perferendis excepturi ipsum veniam? At alias delectus itaque commodi
                repudiandae!
              </p>
              <img src='/images/blog/take-a-seat.jpg' alt='sofa' />
            </div>
            <div className={`col-3 ${styles.blogNav}`}>
              <h3>Recent posts</h3>
              <ul>
                <li>
                  <a href='#'>Welcome to the new page!</a>
                </li>
                <li>
                  <a href='#'>What does your furniture tell about your mind?</a>
                </li>
                <li>
                  <a href='#'>Lorem bed</a>
                </li>
                <li>
                  <a href='#'>There are weird thing in the world</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
