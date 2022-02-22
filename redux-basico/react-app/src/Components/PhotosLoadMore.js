import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadNewPhotos } from '../store/photos';
import Loading from './Helper/Loading';
import styles from './PhotosLoadMore.module.css';

const PhotosLoadMore = () => {
  const { pages, infinity, loading } = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(loadNewPhotos(pages + 1));
  }

  if (loading) return <Loading />;
  if (!infinity) return null;
  return (
    <button className={styles.button} onClick={handleClick}>
      +
    </button>
  );
};

export default PhotosLoadMore;
