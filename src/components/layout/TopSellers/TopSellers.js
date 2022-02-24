import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/galleryRedux';
import GalleryPanel from '../../common/GalleryPanel/GalleryPanel';

const TopSeller = () => {
  const topSellerData = useSelector(state => getAll(state)).topSeller;
  return (
    <>
      <GalleryPanel data={topSellerData} />
    </>
  );
};

export default TopSeller;
