import { client } from "../sanity/lib/client";

import { Department, Doctor, Service, Author, Category, Post, HeroSlide } from "../types/sanity";




// ---------- Departments ----------
export const getDepartments = async (): Promise<Department[]> => {
  const query = `*[_type == "department"]{
    _id,
    name,
    "slug": slug.current,
    description,
    image,
    services[]->{
      _id,
      title,
      "slug": slug.current,
      description,
      image
    }
  }`
  return client.fetch(query)
}

export const getDepartmentBySlug = async (slug: string): Promise<Department | null> => {
  const query = `*[_type == "department" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    description,
    image,
    services[]->{
      _id,
      title,
      "slug": slug.current,
      description,
      image
    }
  }`
  return client.fetch(query, { slug })
}

// ---------- Services ----------
export const getServices = async (): Promise<Service[]> => {
  const query = `*[_type == "service"]{
    _id,
    title,
    "slug": slug.current,
    description,
    image,
    department->{
      _id,
      name,
      "slug": slug.current
    },
    doctors[]->{
      _id,
      name,
      "slug": slug.current,
      photo
    }
  }`
  return client.fetch(query)
}

export const getServiceBySlug = async (slug: string): Promise<Service | null> => {
  const query = `*[_type == "service" && slug.current == $slug][0]{
    _id,
    title,
    description,
    image,
    department->{
      _id,
      name,
      "slug": slug.current
    },
    doctors[]->{
      _id,
      name,
      "slug": slug.current,
      photo
    }
  }`
  return client.fetch(query, { slug })
}

// ---------- Doctors ----------
export const getDoctors = async (): Promise<Doctor[]> => {
  const query = `*[_type == "doctor"]{
    _id,
    name,
    "slug": slug.current,
    photo,
    bio,
    qualifications,
    services[]->{
      _id,
      title,
      "slug": slug.current
    }
  }`
  return client.fetch(query)
}

export const getDoctorBySlug = async (slug: string): Promise<Doctor | null> => {
  const query = `*[_type == "doctor" && slug.current == $slug][0]{
    _id,
    name,
    photo,
    bio,
    qualifications,
    services[]->{
      _id,
      title,
      "slug": slug.current
    }
  }`
  return client.fetch(query, { slug })
}



// Fetch all authors
export const fetchAllAuthors = async (): Promise<Author[]> => {
  const query = `*[_type == "author"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    image,
    bio
  }`
  return await client.fetch(query)
}

// Fetch author by slug
export const fetchAuthorBySlug = async (slug: string): Promise<Author | null> => {
  const query = `*[_type == "author" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    image,
    bio
  }`
  return await client.fetch(query, { slug })
}


// ---------- CATEGORIES ----------
export const fetchAllCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }`
  return await client.fetch(query)
}

export const fetchCategoryBySlug = async (slug: string): Promise<Category | null> => {
  const query = `*[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description
  }`
  return await client.fetch(query, { slug })
}


// ---------- POSTS ----------
export const fetchAllPosts = async (): Promise<Post[]> => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage {
      asset,
      alt
    },
    publishedAt,
    body,
    author->{
      _id,
      name,
      "slug": slug.current,
      image,
      bio
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current,
      description
    }
  }`
  return await client.fetch(query)
}

export const fetchPostBySlug = async (slug: string): Promise<Post | null> => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    mainImage {
      asset,
      alt
    },
    publishedAt,
    body,
    author->{
      _id,
      name,
      "slug": slug.current,
      image,
      bio
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current,
      description
    }
  }`
  return await client.fetch(query, { slug })
}

// Fetch all hero slides
export const getHeroSlides = async (): Promise<HeroSlide[]> => {
  const query = `*[_type == "heroSlide"]{
    _id,
    title,
    description,
    image,
    link
  }`
  return await client.fetch(query)
}