import { IAddress } from "./i-address";
import { ICompany } from "./i-company";

export interface IUser {
    id: number;
    name: string;
    username: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}
