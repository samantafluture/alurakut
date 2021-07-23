export default class DatoCMSService {
  static async getCommunities(githubUser) {
    const url = "https://graphql.datocms.com/";

    const resposta = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "03b32fdecaeddc8861172c77e3f8e1",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `query {
            allCommunities {
              id
              title
              imageUrl
              link
              creatorSlug
            }
          }`,
      }),
    });

    const communities = await resposta.json();
    return communities;
  }

  static async getScraps(githubUser) {
    const url = "https://graphql.datocms.com/";

    const resposta = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "03b32fdecaeddc8861172c77e3f8e1",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `query {
            allScraps{
              id
              text
              creatorSlug
            }
          }`,
      }),
    });

    const scraps = await resposta.json();
    return scraps;
  }
}

