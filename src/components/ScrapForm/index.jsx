import React from "react";

export default function ScrapForm({ scraps, setScraps, username, boxTitle }) {
  return (
    <>
      <h2 className="subTitle">{boxTitle}</h2>
      <form
        onSubmit={function handleCreateScrap(e) {
          e.preventDefault();
          const dadosDoForm = new FormData(e.target);

          const scrap = {
            text: dadosDoForm.get("text"),
            creatorSlug: dadosDoForm.get(username),
            imageUrl: dadosDoForm.get(username),
          };

          fetch("/api/scraps", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(scrap),
          }).then(async (response) => {
            const dados = await response.json();
            const scrap = dados.registroCriado;
            const scrapsAtualizados = [scrap, ...scraps];
            setScraps(scrapsAtualizados);
          });
        }}
      >
        <div>
          <textarea
            placeholder="Deixe seu recado"
            name="text"
            aria-label="Deixe seu recado"
            type="text"
          />
        </div>
        <button>Enviar recado</button>
      </form>
    </>
  );
}
