class RunApi {
  static run(code) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "appilication/json"
      }
      //body: JSON.stringify(code)
    };
    /*
    ${process.env.API_URL}/api/run/
    https://express-simple-rgp893--3000.local.webcontainer.io
    */
    return fetch(
      "https://express-simple-rgp893--3000.local.webcontainer.io/test/",
      requestOptions
    )
      .then(console.log(requestOptions))
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default RunApi;
