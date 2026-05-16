export interface MenuItem {
  name: string;
  href: string;
  sub?: SubMenuItem[];
}

export interface SubMenuItem {
  name: string;
  href: string;
}

export interface ProductData {
  class: string;
  value: string;
  unit: string;
  head: string;
  color: string;
}

export interface Product {
  url: string;
  text: string;
  id: number;
  data: ProductData[];
  desc?: string;
  alt?: string;
  href?: string;
  name?: string;
}