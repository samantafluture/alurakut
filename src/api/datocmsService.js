export default class DataCMSService {
  static async getCommunities() {
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
}
