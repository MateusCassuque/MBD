# Grupo MBD — Site Institucional

Stack: **React 18 + TypeScript + Tailwind CSS + Vite**

## Estrutura do Projecto

```
src/
├── App.tsx                   # Componente raiz
├── main.tsx                  # Entry point
├── index.css                 # Estilos globais + Tailwind
├── components/
│   ├── Navbar.tsx            # Navegação fixa + troca de idioma
│   ├── Hero.tsx              # Secção hero animada
│   ├── About.tsx             # Quem somos + stats
│   ├── Businesses.tsx        # Os 3 negócios do grupo
│   ├── Services.tsx          # Lista de serviços interactiva
│   ├── Contact.tsx           # Formulário + informações
│   └── Footer.tsx            # Rodapé
├── hooks/
│   └── useReveal.ts          # Hook para animações de scroll
└── i18n/
    └── translations.ts       # Traduções PT / EN / FR + tipos TypeScript
```

## Instalação e Arranque

```bash
npm install
npm run dev
```

## Build para Produção

```bash
npm run build
npm run preview
```

## Personalização

### Textos e Traduções
Edita `src/i18n/translations.ts` — cada idioma (pt, en, fr) tem a sua secção.

### Cores
As cores principais usadas via Tailwind:
- Dourado: `#c9a84c` / `#e8c97a`
- Fundo principal: `#0a0a0a`
- Superfícies: `#111111`, `#181818`, `#1e1e1e`
- Texto: `#f5f0e8`

### Contactos
Em `src/components/Contact.tsx`, substitui o email e telefone pelos reais.

### Nomes das Empresas
Em `src/i18n/translations.ts`, campo `biz.items`, actualiza `name`, `cat` e `desc`.
