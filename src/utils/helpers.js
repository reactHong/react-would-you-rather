export const loadingProps = ({
  loading: true,
  loaderProps: {
    style: { color: '#39C4B0' }
  },
});

export const isEmptyObj = (obj) => {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return true;
  }
  return false;
};

