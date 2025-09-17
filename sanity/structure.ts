import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('heroSlide').title('Hero Slides'),
      S.documentTypeListItem('department').title('Departments'),
      S.documentTypeListItem('doctor').title('Doctors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', 'heroSlide', 'department', 'doctor'].includes(item.getId()!),
      ),
    ])
