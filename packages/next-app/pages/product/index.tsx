import {Grid} from "@chakra-ui/react";
import {Card} from "@shared/components/card/card";
import {METHOD} from "@shared/constant/api-constant";
import {CoreServiceSwr} from "@shared/service/swr/core-service-swr";

function Product() {
    const {data} = CoreServiceSwr.get({
        url: 'https://dummyjson.com/products',
        method: METHOD.GET,
        loading: true,
        params: {}
    });
    if (data) {
        console.log('data', data);
    }
    return <Grid templateColumns='repeat(2, 2fr)' gap={2}>{data?.products?.map(product =><Card key={data.id}
        data={product}/>)}</Grid>
}

export const getServerSideProps = async (context) => {
    return {
        props: {}
    }
}

export default Product;
