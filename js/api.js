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
    .catch((error) => {
      onError(error.message);
    });
};

const sendData = (onSuccess, showAlert, data) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => { if (response.ok) {
      onSuccess();
    } else {
      showAlert();
    }

    })
    .catch(() => {
      showAlert();
    });
};

export { getData, sendData };
