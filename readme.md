# SEO Test Site - Documentação

Este repositório contém um site de testes para SEO (Search Engine Optimization), projetado para testar e demonstrar vários aspectos e problemas relacionados à otimização para motores de busca.

## Visão Geral

O SEO Test Site serve como um ambiente controlado para testar como crawlers e ferramentas de análise de SEO interpretam diferentes elementos e estruturas de páginas web. Ele contém exemplos de boas práticas e problemas comuns de SEO para fins educacionais e de teste.

## Tópicos de SEO Abordados

### 1. Estrutura HTML

-   **Semântica HTML**: Páginas com e sem uso adequado de tags semânticas HTML5
-   **Hierarquia de Cabeçalhos**: Exemplos de uso correto e incorreto de tags H1-H6
-   **Estrutura de Conteúdo**: Demonstração de diferentes estruturas de conteúdo e seu impacto no SEO

### 2. Conteúdo

-   **Densidade de Texto**: Exemplos de conteúdo bem estruturado vs. texto denso
-   **Conteúdo Aninhado**: Conteúdo principal em diferentes níveis de aninhamento
-   **Conteúdo Raso**: Páginas com pouco conteúdo textual relevante
-   **Contagem de Palavras**: Testes para analisar como ferramentas contam palavras visíveis

### 3. Conteúdo Duplicado

-   **Duplicação Exata**: Páginas com conteúdo idêntico
-   **Duplicação Parcial**: Páginas com partes significativas de conteúdo duplicado
-   **Conteúdo Similar**: Páginas com conteúdo semelhante mas não idêntico

### 4. Metadados

-   **Títulos**: Páginas com diferentes implementações de tags de título
-   **Meta Descrições**: Exemplos de descrições otimizadas e problemáticas
-   **Open Graph**: Implementação de tags Open Graph para compartilhamento em redes sociais
-   **Twitter Cards**: Exemplos de implementação de Twitter Cards

### 5. Meta Robots

-   **Diretivas de Indexação**: Exemplos de uso de meta robots para controlar indexação
-   **Nofollow**: Demonstração de links com atributo nofollow
-   **Noindex**: Páginas configuradas para não serem indexadas

### 6. Hreflang

-   **Implementação Básica**: Exemplo de uso correto de hreflang
-   **Implementação Incorreta**: Exemplos de erros comuns em implementações de hreflang
-   **Múltiplos Idiomas**: Páginas com suporte a vários idiomas

### 7. URLs Canônicas

-   **Implementação Correta**: Uso adequado de URLs canônicas
-   **Implementação Incorreta**: Exemplos de problemas com URLs canônicas
-   **Canonicalização Cruzada**: Páginas com referências canônicas circulares

### 8. Dados Estruturados

-   **Schema.org**: Implementação de diferentes tipos de schema.org
-   **JSON-LD**: Exemplos de dados estruturados em formato JSON-LD
-   **Microdata**: Exemplos de uso de microdata para dados estruturados

### 9. Links

-   **Links Internos**: Diferentes tipos de links internos e sua implementação
-   **Links Quebrados**: Exemplos de links que apontam para recursos inexistentes
-   **Atributos de Link**: Uso de rel="nofollow", rel="sponsored", rel="ugc"

### 10. Imagens

-   **Otimização Básica**: Exemplos de imagens otimizadas para SEO
-   **Atributos Alt**: Uso correto e incorreto de atributos alt
-   **Formatos de Imagem**: Diferentes formatos de imagem e seu impacto

### 11. Iframes

-   **Conteúdo em Iframes**: Como o conteúdo em iframes é tratado para SEO
-   **Iframes Responsivos**: Implementação de iframes responsivos

### 12. Paginação

-   **Implementação Básica**: Exemplo de sequência paginada corretamente implementada
-   **Rel Next/Prev**: Uso de atributos rel="next" e rel="prev"

### 13. Recursos

-   **Carregamento de Recursos**: Diferentes abordagens para carregar recursos
-   **Páginas Lentas**: Exemplos de páginas com tempo de carregamento excessivo
-   **Conteúdo Dependente de JavaScript**: Páginas que dependem de JS para renderizar conteúdo

### 14. Tipos de Conteúdo

-   **Content-Types Diferentes**: Páginas servidas com diferentes Content-Types
-   **Respostas JSON**: Exemplos de endpoints que retornam JSON
-   **Texto Plano**: Conteúdo servido como texto simples

## Arquivos de Controle para Crawlers

### Robots.txt

O arquivo `robots.txt` contém diretivas para diferentes user-agents, demonstrando como controlar o acesso de crawlers a diferentes partes do site.

### Sitemaps

-   **sitemap.xml**: Contém URLs para as principais páginas do site
-   **sitemap-index.xml**: Um índice que aponta para múltiplos sitemaps específicos por categoria

## Como Usar

1. Clone este repositório
2. Abra o arquivo `index.html` em seu navegador ou use um servidor local como o live server do VSCode
3. Navegue pelas diferentes categorias e páginas de exemplo
4. Use a barra de pesquisa para encontrar páginas específicas (a pesquisa é insensível a maiúsculas/minúsculas e acentuação)

## Ferramentas Recomendadas para Testes

-   JourneySEO
-   Google Search Console
-   Bing Webmaster Tools
-   Screaming Frog SEO Spider
-   SEMrush
-   Ahrefs
-   Lighthouse (Google)
-   PageSpeed Insights
