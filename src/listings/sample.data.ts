import { ContactInfoType, ListingItem, Status } from './listings.entity';

export const listings: ListingItem[] = [
  {
    id: 'eb7e76c1-5363-48d8-ba98-9636f54100e3',
    businessNumber: '106679285',
    corporationId: '1007',
    title: 'Kiwi Clinic',
    spokenLanguageCodes: ['fa', 'en', 'fr', 'th'],
    // offeredServices: [],
    categories: [
      {
        id: 'category1',
        title: 'Massage Therapist',
        avatarUrl:
          'https://cdn.sunlife.com/content/dam/sunlife/regional/canada/images/dhs/neary-location-icon.svg',
        description: '',
        status: Status.ACTIVE,
      },
    ],
    contactInfoList: [
      {
        type: ContactInfoType.EMAIL,
        info: 'test@test.com',
        order: 2,
        status: Status.ACTIVE,
      },
      {
        type: ContactInfoType.WEBSITE,
        info: 'https://www.google.com',
        order: 1,
        status: Status.ACTIVE,
      },
    ],

    addresses: [
      {
        id: 'address1',
        countryCode: 'CA',
        provinceCode: 'BC',
        postalCode: 'V2S 5A1',
        lat: '43.589433',
        long: '-79.642415',
      },
      {
        id: 'address1',
        countryCode: 'CA',
        provinceCode: 'BC',
        postalCode: 'V2S 5A1',
        lat: '43.589433',
        long: '-79.642415',
      },
      {
        id: 'address1',
        countryCode: 'CA',
        provinceCode: 'BC',
        postalCode: 'V2S 5A1',
        lat: '43.589433',
        long: '-79.642415',
      },
      {
        id: 'address1',
        countryCode: 'CA',
        provinceCode: 'BC',
        postalCode: 'V2S 5A1',
        lat: '43.589433',
        long: '-79.642415',
      },
    ],
  },
];
