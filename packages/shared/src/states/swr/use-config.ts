import useSWR from "swr";
import {PagePropsModel} from "../../models/page-props-model";

export const useSWRConfig = (data: PagePropsModel= new PagePropsModel()): [Partial<PagePropsModel>, (loading: PagePropsModel) => void] => {
    const {data: loading, mutate: setConfig} = useSWR('config', null, {
        fallbackData: data,
        use: [],
    });
    return [loading, setConfig];
};
