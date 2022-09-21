import {PagePropsModel} from "@shared/models/page-props-model";
import useSWR from "swr";

export const useSWRConfig = (data: PagePropsModel= new PagePropsModel()): [Partial<PagePropsModel>, (loading: PagePropsModel) => void] => {
    const {data: loading, mutate: setConfig} = useSWR('config', null, {
        fallbackData: data,
        use: [],
    });
    return [loading, setConfig];
};
