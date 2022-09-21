import {METHOD} from "@shared/constant/api-constant";

export interface IRequest<T = any> {
    url: string;
    method: METHOD;
    params?: T;
    loading?: boolean;
    headers?: any;
}
