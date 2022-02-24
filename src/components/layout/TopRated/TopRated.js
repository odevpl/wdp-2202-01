import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/galleryRedux';
import GalleryPanel from '../../common/GalleryPanel/GalleryPanel';

const TopRated = () => {
  const topRatedData = useSelector(state => getAll(state)).topRated;

  return (
    <>
      <GalleryPanel data={topRatedData} />
    </>
  );
};

export default TopRated;
