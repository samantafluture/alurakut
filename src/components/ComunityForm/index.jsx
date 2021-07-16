import React from "react";

export default function CommunityForm({ comunidades, setComunidades }) {
  return (
    <>
      <form
        onSubmit={function handleCriaComunidade(e) {
          e.preventDefault();
          const dadosDoForm = new FormData(e.target);

          const comunidade = {
            id: new Date().toISOString(),
            title: dadosDoForm.get("title"),
            image: dadosDoForm.get("image"),
          };

          const comunidadesAtualizadas = [...comunidades, comunidade];
          setComunidades(comunidadesAtualizadas);
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
            placeholder="Coloque uma URL para usarmos de capa"
            name="image"
            aria-label="Coloque uma URL para usarmos de capa"
          />
        </div>
        <button>Criar comunidade</button>
      </form>
    </>
  );
}
