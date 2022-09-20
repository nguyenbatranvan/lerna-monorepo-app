import axios, {AxiosResponse} from "axios";
import {IRequest} from "../../models/i-request";

export const instance = axios.create({
    headers: {
        'content-type': 'application/json; charset=UTF-8'
    },
    timeout: 300000,
    timeoutErrorMessage: `Connection is timeout exceeded`
});

export const BaseService = {
    get<T = any>({
                     url,
                     params,
                     headers,
                 }: Partial<IRequest>): Promise<AxiosResponse<T>> {
        return instance.get<T, AxiosResponse<T>>(<string>url, {
            params: params,
            baseURL: "",
            headers: headers || {}
        })
    },
    put<T = any>({
                     url,
                     params,
                     headers
                 }: Partial<IRequest>): Promise<AxiosResponse<T>> {
        return instance.put(<string>url, params, {
            baseURL: "",
            headers: headers || {}
        })
    },

    post<T = any>({
                      url,
                      params,
                      headers,
                  }: Partial<IRequest>): Promise<AxiosResponse<T>> {
        return instance.post<T, AxiosResponse<T>>(<string>url, params, {
            baseURL: "",
            headers: headers || {}
        })
    },
    remove<T = any>({url, params, headers}: Partial<IRequest>): Promise<AxiosResponse<T>> {
        return instance.delete(<string>url, {
            params: params,
            baseURL: "",
            headers: headers || {}
        })
    },
    getById<T = any>({url, params, headers}: Partial<IRequest>): Promise<AxiosResponse<T>> {
        return instance.get<T, AxiosResponse<T>>(<string>url, {
            params: params,
            baseURL: "",
            headers: headers || {}
        })
    }

}

instance.interceptors.request.use(
    (config) => {
        const {headers} = config;
        // if (UserIdentity.getToken() && headers)
        //     headers['Authorization'] = `Basic ${UserIdentity.getToken()}`;
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    (config) => {
        return Promise.resolve(config)
    }, (err) => {
        const {response} = err;
        if (response) {
            const {status: statusResponse} = response;
            if (statusResponse === 401) {
                // setTimeout(() => {
                //     localStorage.clear();
                //     sessionStorage.clear();
                //     window.location.href = '/portal/login';
                // }, 2000)
            } else {
                let error;
                if (response.data)
                    error = Error(response.data.message || response.data);
                throw error || err;
            }
        }
        throw {
            message: `Request failed! Please check the network connection again`
        }
    }
)
