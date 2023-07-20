// ENUMS
import { ERequestType } from "../enums/RequestType";
import { EResourceType } from "../enums/Resources";

// TYPES
import { IQuery } from "./request/params/Query";

/**
 * The request containing all the required url, params, query, payload, etc for a requested resource on Twitter.
 * 
 * @public
 */
export interface IRequest {
    /** The base URL of the request. */
    base: string;

    /** The endpoint to which the request is to be sent. */
    endpoint: EResourceType;

    /** The full url of the request. */
    url: string;

    /** The type of 'this' request. */
    type: ERequestType;

    /** The payload to be sent in the request. */
    payload: IQuery;
}