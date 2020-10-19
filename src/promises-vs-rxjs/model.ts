export interface Tenant {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  tenantId: number;
  imageId: number;
}

export interface Image {
  id: number;
  image: string;
}
