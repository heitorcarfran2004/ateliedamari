# Ateliê da Mari — app de membros das Mochilas em Crochê

Entrega do produto **50 Projetos de Mochilas em Crochê**, publicada em
https://ateliedamari.vercel.app/ (é o link cadastrado na Wiapy). Cópia do app da Juh
(`apps/micanga-membros`, clubedajuh.vercel.app): mesma estrutura, leitor, virada de página,
lupa e guia — **o README de lá explica o funcionamento e as armadilhas do leitor**.

    node servidor.cjs     # http://localhost:4200

## O que muda em relação ao da Juh

- **marca** Ateliê da Mari, logo circular de mochila (`assets/logo-*`), paleta rosé e bordô
  da coleção de mochilas no lugar do coral e turquesa
- **sem Produtos Extras**: `CATALOGO.ofertas` vazio e a seção some da home. Para ligar os
  orderbumps, preencher a lista no `catalogo.js`
- **aba Vídeos trancada**: com `CATALOGO.videos` vazio ela mostra cadeado e "Em breve", e o
  ícone da aba tem um cadeadinho. Com vídeos na lista a grade do Wistia volta sozinha
  (tirar a classe `aba-trancada` do botão da aba)
- **guia "Dúvidas?"** reescrito para "Como ler uma receita de crochê", só texto

## Conteúdo

| slug | material | páginas |
|---|---|---|
| principal | 50 Projetos de Mochilas em Crochê | 150 |
| b1 | 30 Carteiras de Crochê | 31 |
| b2 | Dicionário de Pontos Ilustrado | 9 |
| b3 | Guia de Forro, Zíper e Ferragens | 9 |
| b4 | Como Precificar e Vender | 9 |
| b5 | Guia de Fios e Lista de Compras | 9 |

A página 1 de cada bônus é a capa em pé. As páginas internas dos bônus foram geradas no
ChatGPT a partir das capas (`entregaveis/bonus-mochilas/paginas.cjs`).

    bash scripts/moch-app.sh principal b1 b2 b3 b4 b5

gera as páginas webp, as capas e os PDFs a partir das listas ordenadas em
`entregaveis/app-mochilas/listas/<slug>.txt`.

**O principal tem 150 páginas, e não 151**: a lista pula as 7 páginas duplicadas do
Entregável (109–114 e 132), põe a Receita 33 no lugar e ainda está sem a página 2 da
Receita 41 (Tigrinho). Quando essa página existir, entra na lista depois do `130.png` e o
`paginas` do catálogo vai para 151.

## Ainda não ligado

Igual ao app da Juh: o login só confere o formato do e-mail, e o link de suporte do perfil
aponta para `https://wa.me/` sem número.
