import Router from "next/dist/shared/lib/router/router";

export class PagePropsModel {
    config: {
        baseUrl: string;
    }
    origin: string = "";
    url: string;
    router: Router
}
