export interface Comic {
characters: Obj;
collectedIssues: [];
creators: Obj;
dates: ComicDate[];
description: string;
diamondCode: string;
digitalId?: number;
ean: string;
events: Obj;
format: string;
id?: number;
images: ImageModel[];
isbn: string;
issn: string;
issueNumber: number;
modified: string;
pageCount: number;
prices: Price[];
resourceURI: string;
series: Items;
stories: Obj;
textObjects: [];
thumbnail: ImageModel;
title: string;
upc: string;
urls: DataUrls[];
variantDescription: string;
variants: Items[];
}

export interface ComicDate {
    type?: string;
    date?: string;
}

export interface Price {
    price: number;
    type: string;
}

export interface Obj {
    available: number; collectionURI: string; items: Items[]; returned?: number;
}

export interface DataUrls {
    type: string; url: string;
}

export interface ImageModel {
    extension?: string; path?: string;
}

export interface Items {
    resourceURI: string;
    name: string;
    type?: string;
}

export interface ComicResponse {
    count?: number;
    limit?: number;
    offset?: number;
    results: Comic[];
}
