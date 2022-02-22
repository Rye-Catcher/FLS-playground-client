class RunApi {
  static run(code) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "appilication/json" },
      body: JSON.stringify(code)
    };
    return fetch("${process.env.API_URL}/api/run/", requestOptions)
      .then((response) => response.json())
      .then(console.log(requestOptions))
      .catch((error) => {
        throw error;
      });
  }
}

export default RunApi;
