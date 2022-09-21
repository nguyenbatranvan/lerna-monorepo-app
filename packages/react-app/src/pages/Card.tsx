import {Grid} from "@chakra-ui/react";
import {Card} from "@shared/components/card/card";
import {ResponseProduct} from "@shared/models/response-product";
import {BaseService} from "@shared/service/axios/core";
import {AxiosResponse} from "axios";
import {useEffect, useState} from "react";

export function CardPage() {
    const [data, setData] = useState<ResponseProduct>({
        products: []
    });
    useEffect(() => {
        (async () => {
            try {
                const response = await loadProducts();
                setData(response.data);
            } catch (e) {
                // todo error
            }
        })()
    }, [])
    const loadProducts = (): Promise<AxiosResponse> => {
        return BaseService.get<ResponseProduct>({
            url: `https://dummyjson.com/products`
        })
    }

    return <Grid templateColumns='repeat(2, 2fr)' gap={2}>{data?.products?.map(product => <Card key={product.id}
                                                                                                data={product}/>)}</Grid>
}
