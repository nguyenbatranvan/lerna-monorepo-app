import Router from "next/dist/shared/lib/router/router";

interface IPropConfig {
    baseUrl: string;
}

export class PagePropsModel {
    config!: IPropConfig;
    origin: string = "";
    url!: string;
    router!: Router
    constructor() {
    }
}
