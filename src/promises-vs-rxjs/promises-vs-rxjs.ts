import { forkJoin } from "rxjs";
import { switchMap } from "rxjs/operators";
import { consoleLogger } from "../util";
import {
  getTenant,
  getUsers,
  getImage,
  getTenant$,
  getUsers$,
  getImage$,
} from "./apis";
import { Image, Tenant, User } from "./model";

// With Promises
function fetchImages() {
  const images: Promise<Image[]> = getTenant(2)
    .then((tenant) => getUsers(tenant.id))
    .then((users) => users.map((user) => getImage(user.imageId)))
    .then((x: Promise<Image>[]) => Promise.all(x));

  images.then((x: Image[]) => consoleLogger(x));
}

fetchImages();

// With async-await
async function fetchImagesAsync() {
  const tenant: Tenant = await getTenant(2);
  const users: User[] = await getUsers(tenant.id);

  const imagePromises: Promise<Image>[] = users.map((user: User) =>
    getImage(user.imageId)
  );

  const images: Image[] = await Promise.all(imagePromises);

  console.log(images);
}

fetchImagesAsync();

// With RxJS
getTenant$(2)
  .pipe(
    switchMap((tenant: Tenant) =>
      getUsers$(tenant.id).pipe(
        switchMap((users: User[]) =>
          forkJoin(users.map((user: User) => getImage$(user.imageId)))
        )
      )
    )
  )
  .subscribe((x: Image[]) => consoleLogger(x));
