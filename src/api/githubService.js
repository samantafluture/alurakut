export default class GitHubService {
  static async getFollowers(githubUser) {
    const url = `https://api.github.com/users/${githubUser}/followers`;
    const resposta = await fetch(url);
    const followers = await resposta.json();
    return followers;
  }

  static async getUsername(githubUser) {
    const url = `https://api.github.com/users/${githubUser}`;
    const resposta = await fetch(url);
    const username = await resposta.json();
    return username;
  }
}
