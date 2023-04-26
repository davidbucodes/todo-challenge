import { User } from "./types";

export const getUserByIdExample: User = {
  id: 1,
  name: "Test Test",
  username: "Test",
  email: "Test@Test.Test",
  address: {
    street: "Test street",
    suite: "Apt. 000",
    city: "Test city",
    zipcode: "00000-0000",
    geo: {
      lat: "-00.0000",
      lng: "00.0000",
    },
  },
  phone: "0-000-000-0000 x00000",
  website: "Test.Test",
  company: {
    name: "Test-Test",
    catchPhrase: "Test catch phrase",
    bs: "Test",
  },
};
