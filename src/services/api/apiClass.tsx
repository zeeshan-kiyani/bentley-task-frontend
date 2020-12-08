import axios from 'axios';
import default_variables from '../../global-variables';
export const apiRequestAxio = (method:any,uri:string,body:any,headers:any) => {
    const requestOptions = {
      url : `${default_variables.base_path}${uri}`,
      method :  method.toUpperCase(),
      data : body,
      headers : default_variables.jsonHeader
    };
    return axios(requestOptions);
  };
