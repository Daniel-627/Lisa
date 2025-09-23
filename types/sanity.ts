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
  professional_title?: string
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


export type InsurancePartner = {
  _id: string;
  name: string;
  logo: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  website?: string;
};

export type Testimonial = {
  _id: string;
  name: string;
  text: string;
  image?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
};


export type Accreditation = {
  _id: string
  title: string // e.g., ISO, KEBS, NHIF, WHO
  logo?: {
    asset: {
      _ref: string
      _type: "reference"
    }
  }
}


export interface Leader {
  _id: string
  name: string
  role: string
  photo: {
    asset: {
      _ref: string
    }
  }
}
