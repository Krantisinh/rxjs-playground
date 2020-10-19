import { from } from "rxjs";
import { USERS, TENANTS, IMAGES } from "./data";
import { Image, User, Tenant } from "./model";

export const getUsers = (tenantId): Promise<User[]> =>
  new Promise((resolve, reject) =>
    resolve(USERS.filter((user: User) => user.tenantId === tenantId))
  );

export const getTenant = (tenantId: number): Promise<Tenant> =>
  new Promise((resolve, reject) =>
    resolve(TENANTS.find((x) => x.id === tenantId))
  );

export const getImage = (imageId: number): Promise<Image> =>
  new Promise((resolve, reject) =>
    resolve(IMAGES.find((x) => x.id === imageId))
  );

export const getTenant$ = (tenantId: number) => from(getTenant(tenantId));
export const getUsers$ = (tenantId: number) => from(getUsers(tenantId));
export const getImage$ = (imageId: number) => from(getImage(imageId));
