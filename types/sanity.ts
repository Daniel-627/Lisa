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
  services?: Service[]
}

export type Service = {
  _id: string
  title: string
  slug: string
  description?: string
  image?: {
    asset: {
      _ref: string
      _type: "reference"
    }
  }
  department?: {
    _id: string
    name: string
    slug: string
  }
  doctors?: Doctor[]
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
  qualifications?: string[]
  services?: {
    _id: string
    title: string
    slug: string
  }[]
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
