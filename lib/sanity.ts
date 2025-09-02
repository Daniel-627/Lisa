import { client } from "../sanity/lib/client";

// Departments
export const getDepartments = async () => {
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

// Services
export const getServices = async () => {
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

// Doctors
export const getDoctors = async () => {
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

// By slug
export const getServiceBySlug = async (slug: string) => {
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

export const getDoctorBySlug = async (slug: string) => {
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
