export type Gender = 'female' | 'male';

export type UserStatus = 'active' | 'inactive';

export interface ILinkInfo {
    href: string;
}

export type LinkType = 'self' | 'edit' | 'avatar';

export interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    gender: Gender;
    dob: string;
    email: string;
    phone: string;
    website: string;
    address: string;
    status: UserStatus;
    _links: {
        [key in LinkType]: ILinkInfo
    }
}
