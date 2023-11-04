export const fetchData = (searchParam: string) => {
  const request = new Request(
    `'https://api.api-ninjas.com/v1/cars?model=${searchParam}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": import.meta.env.VITE_API_KEY,
      },
      // contentType: "application/json",
    }
  );
  return request;
};
