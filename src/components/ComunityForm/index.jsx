import React from "react";

export default function CommunityForm({
  comunidades,
  setComunidades,
  username,
  githubUser
}) {
  return (
    <>
      <form
        onSubmit={function handleCriaComunidade(e) {
          e.preventDefault();
          const dadosDoForm = new FormData(e.target);

          const comunidade = {
            title: dadosDoForm.get("title"),
            imageUrl: dadosDoForm.get("image"),
            link: dadosDoForm.get("link"),
            creatorSlug: githubUser,
          };

          fetch("/api/comunidades", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(comunidade),
          }).then(async (response) => {
            const dados = await response.json();
            const comunidade = dados.registroCriado;
            const comunidadesAtualizadas = [...comunidades, comunidade];
            setComunidades(comunidadesAtualizadas);
          });
        }}
      >
        <div>
          <input
            placeholder="Qual vai ser o nome da sua comunidade?"
            name="title"
            aria-label="Qual vai ser o nome da sua comunidade?"
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="Insira uma imagem de capa via URL"
            name="image"
            aria-label="Insira uma imagem de capa via URL"
          />
        </div>
        <div>
          <input
            placeholder="Coloque um link de acesso a sua comunidade"
            name="link"
            aria-label="Coloque um link de acesso a sua comunidade"
          />
        </div>
        <button>Criar comunidade</button>
      </form>
    </>
  );
}
