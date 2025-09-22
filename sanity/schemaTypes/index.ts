import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { heroSlide } from './heroSlide'
import department from './department'
import doctor from './doctor'
import insurancePartner from './insurancePartner'
import testimonial from './testimonial'
import accreditation from './accreditation'
import leader from './leader'
// Then we give our schema to the builder and provide the result to Sanity
// This is where we define the structure of our content types



export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blockContentType, categoryType, postType, authorType, heroSlide, department, doctor, insurancePartner, testimonial, accreditation, leader],
}
