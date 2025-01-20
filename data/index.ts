export const navbarData = {
  homeTitle: "लेबिन्द्र बहादुर गुरुङ",
}

export const footerData = {
  author: 'लेबिन्द्र बहादुर गुरुङ',
  aboutAuthor:
    'नमस्ते||about about about about about about about about about about about about about about about about about about about ',
  authorInterest:
    "Interest Interest Interest Interest Interest Interest Interest Interest Interest Interest Interest Interest Interest ",
  aboutTheSite:
    "aboutTheSite aboutTheSite aboutTheSite aboutTheSite aboutTheSite aboutTheSite aboutTheSite aboutTheSite aboutTheSite aboutTheSite ",
}

export const homePage = {
  title: 'मेरो लेख साइटमा स्वागत छ',
  description:
    'Description about this site. like what will be posted or what can be read',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'लेबिन्द्र बहादुर गुरुङ',
  description: 'what best describe you? for example: writer,',
  aboutMe:
    "about me in details. including professional background",
}

export const seoData = {
  title: `लेबिन्द्र बहादुर गुरुङ`,
  ogTitle: ``,
  description: `about about `,
  twitterDescription: ``,
  image:
    '/buddha.png',
  mySite: 'https://test.sumitpun.com.np/',
  twitterHandle: '',
  mailAddress: 'sony23grg@gmail.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
