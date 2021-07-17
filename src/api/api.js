export default class GitHubService 
{
    static async getFollowers(quantidade = 0) {
        const url = "https://api.github.com/users/samantafluture/followers";
        const params = new URLSearchParams();

        if (quantidade > 0) {
            params.append('per_page', quantidade);
        }

        const resposta = await fetch(url + "?" + params);
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