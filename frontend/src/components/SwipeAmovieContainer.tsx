import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { SwipeAmoviePres } from './SwipeAmoviePres';

const fetchMotionPicture = (url: string) => axios.get(`/api/${url}`).then((res) => res.data);

export const SwipeAmovieContainer = () => {
  const { data, error, isLoading } = useSWR('single', fetchMotionPicture);
  if (error) {
    return error;
  }
  if (isLoading) return <>Is Loading</>;

  return <SwipeAmoviePres data={data.movie} />;
};
