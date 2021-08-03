/* eslint-disable no-console */
async function fetchAPI(query, { variables = {} } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getConfigurationsContent() {
  const data = fetchAPI(`
    {
      configuration {
        email
        phone
        address
        facebook
        instagram
      }
    }
  `);
  return data;
}

export async function getStatesRs() {
  const data = fetchAPI(`
    query {
      states(where: { isRS: true }) {
        label
        value
        representatives {
          name
          description
        }
      }
    }
  `);
  return data;
}

export async function getBannersContent() {
  const data = fetchAPI(`
    {
      banners {
        title
        text
        showbutton
        buttontext
        buttonlink
        showButtonSec
        buttonTextSec
        buttonLinkSec
        media {
          url
        }
      }
    }
  `);
  return data;
}

export async function getAbouts() {
  const data = fetchAPI(`
      {
      about {
        title
        description
        subDesctription
        gallery {
          url
        }
        mission
        vision
        values
        titleDistributor
        descriptionDistributor
        showButton
        buttonText
        buttonLink
        mediaDistributor {
          url
        }
      }
    }
  `);
  return data;
}

export async function getDiferentials() {
  const data = fetchAPI(`
    {
      diferentials {
        icon {
          url
        }
        title
        description
      }
    }
  `);
  return data;
}

export async function getItemsProducts() {
  const data = fetchAPI(`
  query products($where: JSON){
      products(where: $where) {
        title
        description
        navName
        navName2
        navName3
        extra
        slug
        showButton
        buttonText
        buttonLink
        icon {
          url
        }
        media {
          url
        }
        ChemicalItems {
          name
          value
        }
        fisioChemical {
          name
          value
        }
      }
    }
  `);
  return data;
}

export async function getOrigin() {
  const data = fetchAPI(`
  {
    origin {
      title
      description
    }
  }
  `);
  return data;
}

export async function getAboutHome() {
  const data = fetchAPI(`
  {
    aboutHome {
      media {
        url
      }
      title
      description
      icon
      showButton
      buttonText
      buttonLink
    }
  }
  `);
  return data;
}

export async function getSeoForPage(url) {
  const data = await fetchAPI(
    `
    query Seos($where: JSON){
      seos(where: $where) {
        url
        seo {
          metaTitle
          metaDescription
          shareImage{
            alt
            media {
              url
            }
          }
          keywords
          preventIndexing
        }
      }
    }
  `,
    {
      variables: {
        where: {
          ...(url ? { url } : { url: '/' }),
        },
      },
    }
  );
  return data?.seos[0];
}
