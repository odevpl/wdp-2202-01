import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/galleryRedux';
import GalleryPanel from '../../common/GalleryPanel/GalleryPanel';

const Featured = () => {
  const featuredData = useSelector(state => getAll(state)).featured;

  return (
    <>
      <GalleryPanel data={featuredData} />
    </>
  );
};

export default Featured;
