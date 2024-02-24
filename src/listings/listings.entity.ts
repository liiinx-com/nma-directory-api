export enum Status {
  ACTIVE = 'ACTIVE',
}

export enum BusinessRegisteredType {
  SOLE = 'SOLE',
  GENERAL = 'GENERAL',
  CORPORATION = 'CORPORATION',
}

export enum ContactInfoType {
  WEBSITE = 'WEBSITE',
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
}

export class ServiceItem {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  //   note: string;
}

export class ContactInfoItem {
  type: ContactInfoType;
  info: string;
  order: number;
  status: Status;
}

export class Category {
  id: string;
  title: string;
  description: string;
  avatarUrl: string;
  status: Status;
  isParent: boolean;

  items: Category[];
}

export class Address {
  id: string;
  countryCode: string;
  provinceCode: string;
  lat: string;
  long: string;
  postalCode: string;
}

export class AffiliationItem {
  id: string;
  title: string;
  description: string;
}

export class ListingItem {
  id: string;
  corporationId: string;
  businessNumber: string;
  title: string;
  status: Status;

  registeredAt: Date;
  businessRegisteredType: BusinessRegisteredType;

  addresses: Address[];
  spokenLanguageCodes: string[];
  categories: Category[];
  contactInfoList: ContactInfoItem[];

  businessHours: BusinessHours;

  offeredServices: ServiceItem[];
  affiliationItems: AffiliationItem[]; // TODO: mentioned by Mehdi

  tags: string[];
}

export class BusinessHours {
  monFrom: number;
  monTo: number;

  tueFrom: number;
  tueTo: number;

  wedFrom: number;
  wedTo: number;

  thrFrom: number;
  thrTo: number;

  friFrom: number;
  friTo: number;

  satFrom: number;
  satTo: number;

  sunFrom: number;
  sunTo: number;
}
