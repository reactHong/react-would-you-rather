import React from 'react';
import { useLoading } from '@agney/react-loading';

function LoadingComponent() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    loaderProps: {
      style: { color: '#39C4B0' }
    },
  });
  return <section className="loadingContainer" {...containerProps}>{indicatorEl}</section>
}

export default LoadingComponent;