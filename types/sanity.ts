// ./types/sanity.ts

export interface Department {
  _id: string
  name: string
  slug: string
  description?: string
  image?: string
  services?: Service[] // populated when expanded
}

export interface Service {
  _id: string
  title: string
  slug: string
  description?: string
  image?: string
  department?: Pick<Department, "_id" | "name" | "slug">
  doctors?: Doctor[] // populated when expanded
}

export interface Doctor {
  _id: string
  name: string
  slug: string
  photo?: string
  bio?: string
  qualifications?: string
  services?: Pick<Service, "_id" | "title" | "slug">[]
}
