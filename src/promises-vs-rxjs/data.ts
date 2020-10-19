import { Image, Tenant, User } from "./model";

export const TENANTS: Tenant[] = [
  { id: 1, name: "Accenture" },
  { id: 2, name: "Dell EMC" },
  { id: 3, name: "VMWare" },
];

export const IMAGES: Image[] = [
  { id: 1, image: ":)" },
  { id: 2, image: ":D" },
  { id: 3, image: ":O" },
];

export const USERS: User[] = [
  { id: 1, name: "Krantisinh", tenantId: 2, imageId: 1 },
  { id: 2, name: "Harshal", tenantId: 2, imageId: 2 },
  { id: 3, name: "Nitesh", tenantId: 3, imageId: 3 },
];
