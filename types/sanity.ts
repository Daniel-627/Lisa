export type Department = {
  _id: string
  name: string
  slug: string
  description?: string
  image?: {
    asset: {
      _ref: string
      _type: "reference"
    }
  }
  doctors: Doctor[]   // always an array
}

export type Doctor = {
  _id: string
  name: string
  slug: string
  photo?: {
    asset: {
      _ref: string
      _type: "reference"
    }
  }
  bio?: string
  qualifications: string[]   // always an array
  department?: {
    _id: string
    name: string
    slug: string
  }
}


export type Author = {
  _id: string
  name: string
  slug: string
  image?: {
    asset: {
      _ref: string
      _type: "reference"
    }
  }
  bio?: any[]
}

export type Category = {
  _id: string
  title: string
  slug: string
  description?: string
}

export type Post = {
  _id: string
  title: string
  slug: string
  author: Author
  mainImage?: {
    asset: {
      _ref: string
      _type: "reference"
    }
    alt?: string
  }
  categories: Category[]
  publishedAt: string
  body: any[] // Portable Text blocks
}


export interface HeroSlide {
  _id: string
  _type: "heroSlide"
  title: string
  description?: string
  image: {
    asset: {
      _ref: string
      _type: "reference"
    }
    alt?: string
  }
  link?: string
  order?: number
}
