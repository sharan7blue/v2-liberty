import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import {
  MdPerson,
  MdDescription,
  MdVideocam,
  MdImage,
  MdTextFields,
  MdViewCompact
} from 'react-icons/lib/md'
// import FaSettings from 'react-icons/lib/fa/settings'
import {FaSitemap, FaTag, FaTags, FaSliders, FaSprayCan, FaNewspaperO} from 'react-icons/lib/fa'
// ran npm install react
// ran npm install font-awesome

import IframePreview from '../previews/IframePreview'

// Web preview configuration
const remoteURL = 'https://sanity-gatsby-blog-web-3d35kyw2.netlify.app'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const {schemaType} = props
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({previewURL})
    ])
  }
  return S.document().views([S.view.form()])
}

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Brand Information')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('brandInfo')
            .schemaType('brandInfo')
            .documentId('brandInfo')
        ),
      S.listItem()
        .title('Configuration')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('config')
            .documentId('config')
        ),
      S.divider(),
      S.listItem()
        .title('Layout')
        .icon(MdViewCompact)
        .schemaType('landingLayout')
        .child(S.documentTypeList('landingLayout').title('Layouts')),
      S.divider(),
      S.listItem()
        .title('Article - Feature')
        .icon(FaNewspaperO)
        .schemaType('featureArticle')
        .child(S.documentTypeList('featureArticle').title('Article - Feature')),
      S.listItem()
        .title('Article - Gallery')
        .icon(FaNewspaperO)
        .schemaType('galleryArticle')
        .child(S.documentTypeList('galleryArticle').title('Article - Gallery')),
      S.listItem()
        .title('Article - How To')
        .icon(FaNewspaperO)
        .schemaType('howToArticle')
        .child(S.documentTypeList('howToArticle').title('Article - How To')),
      S.listItem()
        .title('Brand')
        .icon(MdDescription)
        .schemaType('brand')
        .child(S.documentTypeList('brand').title('Brand')),
      S.listItem()
        .title('Product')
        .icon(FaSprayCan)
        .schemaType('product')
        .child(S.documentTypeList('product').title('Product')),
      S.listItem()
        .title('Tool')
        .icon(MdDescription)
        .schemaType('tool')
        .child(S.documentTypeList('tool').title('tools')),
      S.divider(),

      S.listItem()
        .title('Slider Type')
        .icon(FaSliders)
        .schemaType('sliderType')
        .child(S.documentTypeList('sliderType').title('Slider Type')),
      S.listItem()
        .title('Slider - Articles')
        .icon(FaSliders)
        .schemaType('articleSlider')
        .child(S.documentTypeList('articleSlider').title('Slider - Articles')),
      S.listItem()
        .title('Slider - Products')
        .icon(FaSliders)
        .schemaType('productSlider')
        .child(S.documentTypeList('productSlider').title('Slider - Products')),
      S.divider(),
      S.listItem()
        .title('Breadcrumb')
        .icon(FaSitemap)
        .schemaType('breadcrumb')
        .child(S.documentTypeList('breadcrumb').title('Breadcrumb')),
      S.listItem()
        .title('Tag Category')
        .icon(FaTag)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Tag Categories')),
      S.listItem()
        .title('Tags')
        .icon(FaTags)
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('Tags')),
      //
      S.divider(),
      S.listItem()
        .title('Text Block')
        .icon(MdTextFields)
        .schemaType('textBlock')
        .child(S.documentTypeList('textBlock').title('Text Block')),
      S.listItem()
        .title('Text Block Type')
        .icon(MdTextFields)
        .schemaType('textBlockType')
        .child(S.documentTypeList('textBlockType').title('Text Block Type')),
      S.listItem()
        .title('Image Block')
        .icon(MdImage)
        .schemaType('textBlock')
        .child(S.documentTypeList('imageBlock').title('Image Block')),
      S.listItem()
        .title('Image Block Type')
        .icon(MdImage)
        .schemaType('imageBlockType')
        .child(S.documentTypeList('imageBlockType').title('Image Block Type')),
      S.listItem()
        .title('Video Block')
        .icon(MdVideocam)
        .schemaType('videoBlock')
        .child(S.documentTypeList('videoBlock').title('Video Block')),
      S.listItem()
        .title('Video Block Type')
        .icon(MdVideocam)
        .schemaType('videoBlockType')
        .child(S.documentTypeList('videoBlockType').title('Video Block Type')),
      S.divider(),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Author')),
      S.divider(),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Blog Author')
        .icon(MdPerson)
        .schemaType('blogAuthor')
        .child(S.documentTypeList('blogAuthor').title('Blog Authors')),
      S.listItem()
        .title('Blog Posts')
        .icon(MdDescription)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'brandInfo',
            'config',
            'landingLayout',
            'featureArticle',
            'galleryArticle',
            'howToArticle',
            'brand',
            'breadcrumb',
            'product',
            'sliderType',
            'articleSlider',
            'productSlider',
            'tool',
            'tag',
            'category',
            'author',
            'post',
            'writer',
            'blogAuthor',
            'siteSettings',
            'textBlock',
            'textBlockType',
            'imageBlock',
            'imageBlockType',
            'videoBlock',
            'videoBlockType'
          ].includes(listItem.getId())
      )
    ])
