import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    console.log("Response Interceptor: ",response);
    return response.data;
  }, function (error) {
    // Do something with response error
    alert('Error Occured');
    console.log(`Error Interceptor: ${error}`)
    return Promise.reject(error);
  });


async function  MyfetchMiddleWare(url,options,method="GET"){
      console.log("method:",method, "url:",url, "options:",options)
     let methods = ['get','post','put','patch','delete',]

     let conditions = methods.map(element => {
      return element === method.toLowerCase()
     });


  let commonHeader = {
    "content-type":"json"
  }

  let CommonBody = {
    userID:123
  }

  // let username= localStorage.getitem("username")

  // url  = `https://649177ad2f2c7ee6c2c844a9.mockapi.io${url}?username=${username}`
  let baseUrl  = `https://649177ad2f2c7ee6c2c844a9.mockapi.io${url}`
  if(options){

    options.headers = {...commonHeader, ...options?.headers}
    
    options.body = {...CommonBody, ...options?.body}
  }else{
    options = {headers: {...commonHeader}, body : {...CommonBody}}
  }



  if(JSON.stringify(options.body)){
    if(conditions){
    let responseData = await axios?.[method?.toLowerCase()](baseUrl,options)

    console.log("Response: ",responseData)

    return responseData
  }else{
    return false
  }
}else{
  return false
}

 
}

export default MyfetchMiddleWare