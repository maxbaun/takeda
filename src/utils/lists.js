export const listUnstyled = () => {
  return {
    listStyle: 'none',
    margin: 0,
    paddingLeft: 0
  };
};

export const listInline = () => {
  return {
    ...listUnstyled(),
    display: 'flex'
  };
};
