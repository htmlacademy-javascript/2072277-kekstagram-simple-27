const getData = (onSuccess, onError) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple/data',
    {
      method: 'GET',
    },
  )
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendData = (onSuccess, showAlert, data) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: data,
      // headers: {
      //   "content-type": "multipart/form-data",
      //   "Access-Control-Allow-Origin": "*"
      // }
    },
  )
    .then((response) => { if (response.ok) {
      return response.json();
    } else {
      showAlert();
    }

    })
    .then(() => {
      onSuccess();
    })
    .catch(() => {
      showAlert();
    });
};

export { getData, sendData };
