const END_POINT = "http://localhost:5000/";

const ReportError = (err, errHandler) => {
  if (errHandler != null) {
    errHandler(err);
  } else {
    console.log(err.message);
  }
};

const Http = {
  GET: (service, successHandler, errorHandler = null) => {
    const url = END_POINT + service;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        successHandler(data);
      })
      .catch((err) => {
        ReportError(err, errorHandler);
      });
  },
  SHOW: (service, id, successHandler, errorHandler = null) => {
    const url = END_POINT + service + "/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        successHandler(data);
      })
      .catch((err) => {
        ReportError(err, errorHandler);
      });
  },
  POST: (service, data, successHandler, errorHandler = null) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const url = END_POINT + service;
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => successHandler(data))
      .catch((err) => {
        ReportError(err, errorHandler);
      });
  },
};
export default Http;
