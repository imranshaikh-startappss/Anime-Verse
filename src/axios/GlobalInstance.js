import axios from "axios";

// export const BaseUrl = [
//   "https://649177ad2f2c7ee6c2c844a9.mockapi.io",
//   "https://fakestoreapi.com",
// ];

// class AxiosBase {
//   static axiosBase;
//   constructor(baseURL) {
//     this.axiosBase = axios.create({ baseURL: baseURL || BaseUrl[1] });

//     // Add a request interceptor
//     this.axiosBase.interceptors.request.use(
//       function (config) {
//         // Do something before request is sent
//         console.log("Request interceptor: ", config);
//         return config;
//       },
//       function (error) {
//         // Do something with request error
//         return Promise.reject(error);
//       }
//     );

//     // Add a response interceptor
//     this.axiosBase.interceptors.response.use(
//       function (response) {
//         // Do something with response data
//         console.log("Response Interceptor: ", response);
//         return response.data;
//       },
//       function (error) {
//         // Do something with response error
//         alert("Error Occured");
//         console.log(`Error Interceptor: ${error}`);
//         return Promise.reject(error);
//       }
//     );
//   }
// }

// class AxiosInstance extends AxiosBase {

//   get(url, config) {
//     return this.axiosBase.get(url, config);
//   }

//   post(url, body, config) {
//     return this.axiosBase.post(url, body, config);
//   }

//   put(url, body, config) {
//     return this.axiosBase.put(url, body, config);
//   }

//   patch(url, body, config) {
//     return this.axiosBase.patch(url, body, config);
//   }

//   delete(url, config) {
//     return this.axiosBase.delete(url, config);
//   }
// }


//  Add a request interceptor
    axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        console.log("Request interceptor: ", config);
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
      function (response) {
        // Do something with response data
        console.log("Response Interceptor: ", response);
        return response.data;
      },
      function (error) {
        // Do something with response error
        alert("Error Occured");
        console.log(`Error Interceptor: ${error}`);
        return Promise.reject(error);
      }
      );

async function MyfetchMiddleWare(url, base="0", options, method = "GET") {
  console.log("method:", method, "url:", url, "options:", options);
  let methods = ["get", "post", "put", "patch", "delete"];

  let conditions = methods.map((element) => {
    return element === method.toLowerCase();
  });

  const APIBase = [
      "https://649177ad2f2c7ee6c2c844a9.mockapi.io",
      "https://fakestoreapi.com",
    ];



  let commonHeader = {
    "content-type": "json",
  };

  let CommonBody = {
    userID: 123,
  };

  // let username= localStorage.getitem("username")

  // url  = `https://649177ad2f2c7ee6c2c844a9.mockapi.io${url}?username=${username}`
  let baseUrl = `${APIBase[base]}${url}`;
  if (options) {
    options.headers = { ...commonHeader, ...options?.headers };

    options.body = { ...CommonBody, ...options?.body };
  } else {
    options = { headers: { ...commonHeader }, body: { ...CommonBody } };
  }

  if (JSON.stringify(options.body)) {
    if (conditions) {
      let responseData = await axios?.[method?.toLowerCase()](baseUrl, options);

      console.log("Response: ", responseData);

      return responseData;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// export default AxiosInstance;
export default MyfetchMiddleWare;
