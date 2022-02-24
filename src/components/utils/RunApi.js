class RunApi {
  static run(code) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code: code })
    };
    /*
    ${process.env.API_URL}/api/run/
    https://express-simple-rgp893--3000.local.webcontainer.io
    */
    return fetch(
      "https://fls-playground-server.herokuapp.com/api/run/",
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
