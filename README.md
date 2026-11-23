# QuadriTour Jeri

Site estático responsivo inspirado na referência Turun: areia, cartões-postais, verde-azulado e tipografia manuscrita. Conteúdo e fotos de https://www.quadritourjeri.com.br/, consultado em 23/11/2026. O ZIP de referência é uma captura incompleta; o novo site foi implementado separadamente, sem depender do runtime Aura.

## Executar

Requer Node.js. Não é necessário instalar pacotes.

```powershell
cd C:\agencia\quadritourjeri
npm run dev
```

Acesse http://127.0.0.1:4173. Alternativamente, abra index.html no navegador.

## Verificar e gerar entrega

```powershell
npm run check
npm run build
```

A pasta dist contém o site estático para hospedagem. Nenhuma publicação foi realizada.

## Edição

- index.html: seções, contatos, metadados e formulário.
- styles.css: aparência e adaptação para dispositivos.
- app.js: catálogo, filtros, galeria, detalhes e mensagem de WhatsApp.
- assets/: fotos do cliente, fontes locais e ilustrações SVG.

Reservas são negociadas no WhatsApp +55 88 99752-0086. O formulário apenas monta a mensagem, não confirma disponibilidade, não recebe pagamentos e não guarda dados. Preços, horários, inclusões e requisitos não foram presumidos. Revisar esses dados com o cliente antes da publicação. A marca no cabeçalho é uma proposta tipográfica; a logomarca original foi preservada em assets/logomarca.png.

Fontes: DM Sans e Caveat, distribuídas pelo Google Fonts sob SIL Open Font License. Fotos reutilizadas do site do cliente; confirmar autorização de uso antes de publicar. O arquivo de referência fornecido permanece intacto.
