import {METHOD} from "../constant/api-constant";

export interface IRequest<T = any> {
    url: string;
    method: METHOD;
    params?: T;
    loading?: boolean;
    headers?: any;
}
