// Catalogo da area de membros do Ateliê da Mari. Tudo que a home e o leitor mostram sai daqui.
//
// Ao trocar um livro de lugar ou acrescentar paginas, mexa SO neste arquivo:
// nem a home nem o leitor tem conteudo escrito no HTML.
//
// `paginas` e a CONTAGEM, e os arquivos precisam existir como
// assets/livros/<slug>/pag-001.webp ate pag-<paginas>.webp, com 3 digitos.
// Quem gera esses webp, a capa e o PDF e o scripts/moch-app.sh, a partir das listas
// ordenadas em entregaveis/app-mochilas/listas/<slug>.txt.

const CATALOGO = {
  // o acesso grande da home
  // 150 = capa + 50 receitas x 3 paginas, menos a pagina 2 da Receita 41 (Tigrinho),
  // que ainda nao existe. Quando ela chegar: acrescentar na lista e somar 1 aqui.
  principal: {
    slug: 'principal',
    titulo: '50 Projetos de Mochilas em Crochê',
    paginas: 150,
    capa: 'assets/capas/principal.webp',
    pdf: 'pdf/50-mochilas.pdf',
  },

  // o carrossel horizontal. `paginas` inclui a capa, que e a pagina 1 de cada um.
  bonus: [
    { slug: 'b1', titulo: '30 Carteiras de Crochê', sub: 'Receitas para combinar com a sua mochila',
      paginas: 30, capa: 'assets/capas/b1.webp', pdf: 'pdf/bonus-1-carteiras.pdf' },
    // { slug: 'b2', titulo: 'Dicionário de Pontos Ilustrado', sub: 'Todos os pontos das receitas, foto a foto',
    // paginas: 9, capa: 'assets/capas/b2.webp', pdf: 'pdf/bonus-2-pontos.pdf' },
    { slug: 'b3', titulo: 'Guia de Forro, Zíper e Ferragens', sub: 'O acabamento que faz a mochila parecer de loja',
      paginas: 8, capa: 'assets/capas/b3.webp', pdf: 'pdf/bonus-3-acabamento.pdf' },
    { slug: 'b4', titulo: 'Como Precificar e Vender', sub: 'O custo real e o preço justo da sua mochila',
      paginas: 8, capa: 'assets/capas/b4.webp', pdf: 'pdf/bonus-4-precificar.pdf' },
    // { slug: 'b5', titulo: 'Guia de Fios e Lista de Compras', sub: 'Qual fio escolher e quanto comprar',
    // paginas: 9, capa: 'assets/capas/b5.webp', pdf: 'pdf/bonus-5-fios.pdf' },
  ],

  // "Produtos Extras" (orderbumps): DESLIGADOS por enquanto. Com a lista vazia a secao
  // some da home. Formato de cada item, para quando entrarem:
  //   { slug, titulo, sub, paginas, de, por, liberado, capa, pdf, checkout }
  ofertas: [],

  // A aba de VÍDEOS. Vazia = a aba mostra o cadeado e o aviso de "Em breve".
  // Formato de cada item: { id: '<id do Wistia>', seg: <duração em segundos> }.
  videos: [],
};

// o leitor acha qualquer material pelo slug: principal, bonus ou extra liberado
CATALOGO.porSlug = (slug) =>
  slug === 'principal' ? CATALOGO.principal
    : CATALOGO.bonus.find(b => b.slug === slug)
    || CATALOGO.ofertas.find(o => o.slug === slug && o.liberado);
