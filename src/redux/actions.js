const requestData = (data) => ({
  type: "REQUEST_DATA",
  data,
});

const fetchData = (data) => ({
  type: "FETCH_DATA",
  data,
});

export { requestData, fetchData };
