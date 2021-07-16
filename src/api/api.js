export default class GitHubService 
{
    static async getFollowers() {
        const url = "https://api.github.com/users/samantafluture/followers";
        const resposta = await fetch(url);
        const followers = await resposta.json();
        return followers;
    }

    static async getUsername() {
        const url = "https://api.github.com/users/samantafluture";
        const resposta = await fetch(url);
        const username = await resposta.json();
        return username;
    }
}