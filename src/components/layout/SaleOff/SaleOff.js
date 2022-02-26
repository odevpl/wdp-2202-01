import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/galleryRedux';
import GalleryPanel from '../../common/GalleryPanel/GalleryPanel';

const SaleOff = () => {
  const saleOffData = useSelector(state => getAll(state)).saleOff;

  return (
    <>
      <GalleryPanel data={saleOffData} />
    </>
  );
};

export default SaleOff;
