import axios from 'axios'; //액시오스

export default function customAxios(url, method, callback, data){
    axios(
        {
            url: '' + url,
            method: method,
            data : data,

            /**
             * 
             * 
             */
            baseURL: 'http://localhost:8080',
            withCredentials: true,
        }
    ).then(function (response){
        callback(response.data);
    });
}
