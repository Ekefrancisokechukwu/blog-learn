export const searchQuery = (query) => {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  return encodeURI(url);
};
