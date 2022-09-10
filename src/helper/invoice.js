import api from "./api";

const getFieldsData = (data) => {
  return new Promise((resolve, reject) => {
    api
      .get("Prod/v1/invoice/alpha/fetchfields", data)
      .then((response) => {
        console.log("response", response)
        if (response.status === 201) {
          resolve(response.data);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const documentUpload = (data) => {
  return new Promise((resolve, reject) => {
    api
      .post("Prod/v1/invoice/alpha/documentupload" + data)
      .then((response) => {
        console.log("response", response)
        if (response.status === 201) {
          resolve(response.data);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const fetch = (data) => {
    return new Promise((resolve, reject) => {
      api
        .post("Prod/v1/invoice/alpha/fetch" + data)
        .then((response) => {
          console.log("response", response)
          if (response.status === 201) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

export { getFieldsData, documentUpload, fetch };
