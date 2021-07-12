export default class GitHubService 
{
    static async getFollowers(quantidade = 0, randomico = false) {
        const url = "https://api.github.com/users/samantafluture/followers";
        const params = new URLSearchParams();

        if (quantidade > 0) {
            params.append('qtd', quantidade);
        }

        if (randomico) {
            params.append('random', true);
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