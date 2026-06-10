export type BusinessKey = "textil" | "boutique" | "restaurante";

export interface Product {
  id: number;
  business: BusinessKey;
  category: string;
  name: string;
  nameFr: string;
  nameEn: string;
  price: number;
  currency: string;
  unit: string;
  minOrder: number;
  badge?: "novo" | "destaque" | "limitado" | "bestseller";
  rating: number;
  reviews: number;
  description: string;
  descriptionEn: string;
  descriptionFr: string;
  specs: { label: string; value: string }[];
  tags: string[];
  color: string; // placeholder gradient for image
}

export const BUSINESSES: Record<BusinessKey, { label: string; labelEn: string; labelFr: string; icon: string; color: string }> = {
  textil:      { label: "MBD Têxtil",      labelEn: "MBD Textiles",   labelFr: "MBD Textile",     icon: "🧵", color: "#8B6914" },
  boutique:    { label: "MBD Boutique",    labelEn: "MBD Boutique",   labelFr: "MBD Boutique",    icon: "👗", color: "#6B4A7A" },
  restaurante: { label: "MBD Restaurante", labelEn: "MBD Restaurant", labelFr: "MBD Restaurant",  icon: "🍽", color: "#7A2B2B" },
};

export const PRODUCTS: Product[] = [
  // ─── TÊXTIL ────────────────────────────────────────────────────
  {
    id: 1, business: "textil", category: "Semi-Torcistas",
    name: "Semi-Torcista Premium 40/2", nameEn: "Premium Semi-Twisted 40/2", nameFr: "Semi-Torsadé Premium 40/2",
    price: 4.80, currency: "€", unit: "kg", minOrder: 50,
    badge: "bestseller", rating: 4.9, reviews: 128,
    description: "Fio semi-torcista de alta tenacidade, título 40/2, ideal para confecção de tecidos planos e malhas de elevada qualidade. Composição 100% algodão penteado.",
    descriptionEn: "High-tenacity semi-twisted yarn, title 40/2, ideal for woven and knit fabrics of superior quality. 100% combed cotton composition.",
    descriptionFr: "Fil semi-torsadé haute ténacité, titre 40/2, idéal pour les tissus tissés et mailles de haute qualité. Composition 100% coton peigné.",
    specs: [
      { label: "Título", value: "40/2 Nm" },
      { label: "Composição", value: "100% Algodão penteado" },
      { label: "Torção", value: "680 T/m Z" },
      { label: "Resistência", value: "≥ 18 cN/tex" },
      { label: "Cor disponível", value: "Cru, Branco óptico, Cores sob pedido" },
      { label: "Embalagem", value: "Cones de 1,5 kg" },
    ],
    tags: ["algodão", "semi-torcista", "40/2", "premium"],
    color: "linear-gradient(135deg,#3a2a0a,#6b4f1a)",
  },
  {
    id: 2, business: "textil", category: "Semi-Torcistas",
    name: "Semi-Torcista Poliéster 50/2", nameEn: "Polyester Semi-Twisted 50/2", nameFr: "Semi-Torsadé Polyester 50/2",
    price: 3.20, currency: "€", unit: "kg", minOrder: 100,
    badge: "novo", rating: 4.7, reviews: 54,
    description: "Fio semi-torcista de poliéster texturizado, título 50/2. Alta resistência à abrasão, brilho moderado e excelente estabilidade dimensional para aplicações industriais.",
    descriptionEn: "Textured polyester semi-twisted yarn, title 50/2. High abrasion resistance, moderate sheen, and excellent dimensional stability for industrial applications.",
    descriptionFr: "Fil semi-torsadé polyester texturé, titre 50/2. Haute résistance à l'abrasion, brillance modérée et excellente stabilité dimensionnelle.",
    specs: [
      { label: "Título", value: "50/2 Nm" },
      { label: "Composição", value: "100% Poliéster" },
      { label: "Torção", value: "750 T/m S" },
      { label: "Resistência", value: "≥ 38 cN/tex" },
      { label: "Cor disponível", value: "Branco cru, Preto, Cores sob pedido" },
      { label: "Embalagem", value: "Cones de 2 kg" },
    ],
    tags: ["poliéster", "semi-torcista", "industrial", "50/2"],
    color: "linear-gradient(135deg,#1a2a3a,#2a4a6a)",
  },
  {
    id: 3, business: "textil", category: "Semi-Torcistas",
    name: "Semi-Torcista Misto CO/PES 30/2", nameEn: "Blended Semi-Twisted CO/PES 30/2", nameFr: "Semi-Torsadé Mixte CO/PES 30/2",
    price: 3.90, currency: "€", unit: "kg", minOrder: 75,
    badge: "destaque", rating: 4.8, reviews: 87,
    description: "Mistura equilibrada algodão/poliéster 65/35, título 30/2. Combina o conforto natural do algodão com a durabilidade do poliéster. Ideal para vestuário de trabalho.",
    descriptionEn: "Balanced cotton/polyester blend 65/35, title 30/2. Combines natural cotton comfort with polyester durability. Ideal for workwear garments.",
    descriptionFr: "Mélange équilibré coton/polyester 65/35, titre 30/2. Combine le confort naturel du coton avec la durabilité du polyester.",
    specs: [
      { label: "Título", value: "30/2 Nm" },
      { label: "Composição", value: "65% CO / 35% PES" },
      { label: "Torção", value: "600 T/m Z" },
      { label: "Resistência", value: "≥ 22 cN/tex" },
      { label: "Cor disponível", value: "Cru, Cores standard, Personalizado" },
      { label: "Embalagem", value: "Cones de 1,5 kg" },
    ],
    tags: ["misto", "algodão", "poliéster", "vestuário trabalho"],
    color: "linear-gradient(135deg,#2a3a1a,#4a6a2a)",
  },
  {
    id: 4, business: "textil", category: "Fios Especiais",
    name: "Fio Fantasia Lurex Dourado", nameEn: "Gold Lurex Fancy Yarn", nameFr: "Fil Fantaisie Lurex Doré",
    price: 12.50, currency: "€", unit: "kg", minOrder: 20,
    badge: "limitado", rating: 5.0, reviews: 31,
    description: "Fio fantasia com filamento metálico dourado lurex intercalado. Aplicação em moda de luxo, bordados e acessórios de alta costura. Produção limitada por lote.",
    descriptionEn: "Fancy yarn with interspersed gold lurex metallic filament. Application in luxury fashion, embroidery and haute couture accessories.",
    descriptionFr: "Fil fantaisie avec filament métallique lurex doré entrelacé. Application en mode luxe, broderies et accessoires haute couture.",
    specs: [
      { label: "Composição", value: "70% Viscose / 30% Lurex" },
      { label: "Efeito", value: "Metálico brilhante" },
      { label: "Aplicação", value: "Bordado, tecido jacquard" },
      { label: "Lote mínimo", value: "20 kg" },
      { label: "Cor", value: "Dourado, Prateado" },
      { label: "Embalagem", value: "Cones de 500g" },
    ],
    tags: ["lurex", "dourado", "fantasia", "luxo", "bordado"],
    color: "linear-gradient(135deg,#4a3500,#c9a84c)",
  },

  // ─── BOUTIQUE ──────────────────────────────────────────────────
  {
    id: 5, business: "boutique", category: "Vestuário",
    name: "Blazer Estruturado Feminino", nameEn: "Structured Women's Blazer", nameFr: "Blazer Structuré Femme",
    price: 189.00, currency: "€", unit: "unid.", minOrder: 1,
    badge: "destaque", rating: 4.8, reviews: 63,
    description: "Blazer de alfaiataria feminino em tecido de lã virgem. Corte estruturado com ombros marcados, forro em seda, botões dourados. Disponível em Preto e Camel.",
    descriptionEn: "Women's tailored blazer in virgin wool fabric. Structured cut with defined shoulders, silk lining, gold buttons. Available in Black and Camel.",
    descriptionFr: "Blazer tailleur femme en tissu de laine vierge. Coupe structurée avec épaules marquées, doublure en soie, boutons dorés.",
    specs: [
      { label: "Material", value: "100% Lã virgem" },
      { label: "Forro", value: "100% Seda" },
      { label: "Tamanhos", value: "XS — XL" },
      { label: "Cores", value: "Preto, Camel, Cinza chumbo" },
      { label: "Cuidados", value: "Limpeza a seco" },
      { label: "Origem", value: "Produção europeia" },
    ],
    tags: ["blazer", "alfaiataria", "lã", "feminino", "luxo"],
    color: "linear-gradient(135deg,#1a0a2a,#4a2a6a)",
  },
  {
    id: 6, business: "boutique", category: "Vestuário",
    name: "Vestido Midi Cetim", nameEn: "Satin Midi Dress", nameFr: "Robe Midi Satin",
    price: 145.00, currency: "€", unit: "unid.", minOrder: 1,
    badge: "novo", rating: 4.9, reviews: 41,
    description: "Vestido midi em cetim de viscose com brilho natural. Decote assimétrico, silhueta fluida, alça ajustável. Ideal para ocasiões formais e jantares de gala.",
    descriptionEn: "Midi dress in viscose satin with natural sheen. Asymmetric neckline, fluid silhouette, adjustable strap. Ideal for formal occasions and gala dinners.",
    descriptionFr: "Robe midi en satin viscose avec brillance naturelle. Décolleté asymétrique, silhouette fluide, bretelle ajustable.",
    specs: [
      { label: "Material", value: "100% Viscose" },
      { label: "Acabamento", value: "Cetim" },
      { label: "Tamanhos", value: "XS — L" },
      { label: "Cores", value: "Champagne, Midnight, Bordeaux" },
      { label: "Cuidados", value: "Lavagem à mão 30°C" },
      { label: "Ocasião", value: "Formal, Gala" },
    ],
    tags: ["vestido", "cetim", "midi", "formal", "feminino"],
    color: "linear-gradient(135deg,#2a1a0a,#7a4a1a)",
  },
  {
    id: 7, business: "boutique", category: "Acessórios",
    name: "Mala Estruturada Couro", nameEn: "Structured Leather Bag", nameFr: "Sac Structuré Cuir",
    price: 275.00, currency: "€", unit: "unid.", minOrder: 1,
    badge: "bestseller", rating: 4.9, reviews: 95,
    description: "Mala de mão estruturada em couro genuíno italiano. Fecho com cadeado dourado, dois compartimentos internos, alça de ombro removível. Artesanal.",
    descriptionEn: "Structured handbag in genuine Italian leather. Gold padlock closure, two internal compartments, removable shoulder strap. Handcrafted.",
    descriptionFr: "Sac à main structuré en cuir italien véritable. Fermeture cadenas dorée, deux compartiments internes, bandoulière amovible. Artisanal.",
    specs: [
      { label: "Material", value: "Couro bovino italiano" },
      { label: "Ferragens", value: "Dourado 18k" },
      { label: "Dimensões", value: "30 × 22 × 12 cm" },
      { label: "Cores", value: "Preto, Cognac, Nude" },
      { label: "Compartimentos", value: "2 internos + 1 lateral" },
      { label: "Origem", value: "Artesanal — Itália" },
    ],
    tags: ["mala", "couro", "acessório", "luxo", "artesanal"],
    color: "linear-gradient(135deg,#2a1500,#6b3a10)",
  },
  {
    id: 8, business: "boutique", category: "Acessórios",
    name: "Lenço Seda Estampado", nameEn: "Printed Silk Scarf", nameFr: "Foulard Soie Imprimé",
    price: 89.00, currency: "€", unit: "unid.", minOrder: 1,
    badge: "limitado", rating: 4.7, reviews: 29,
    description: "Lenço 90×90 cm em seda natural de 12 momme. Estampa exclusiva MBD, bordas a rolar à mão. Embalagem em caixa premium com fita dourada.",
    descriptionEn: "90×90 cm scarf in 12 momme natural silk. Exclusive MBD print, hand-rolled edges. Packaging in premium box with gold ribbon.",
    descriptionFr: "Foulard 90×90 cm en soie naturelle 12 mommes. Imprimé exclusif MBD, bords roulottés à la main. Emballage boîte premium avec ruban doré.",
    specs: [
      { label: "Material", value: "100% Seda natural" },
      { label: "Gramagem", value: "12 momme" },
      { label: "Dimensão", value: "90 × 90 cm" },
      { label: "Acabamento", value: "Borda rolar à mão" },
      { label: "Estampa", value: "Exclusiva MBD — edição limitada" },
      { label: "Cuidados", value: "Lavagem à mão em água fria" },
    ],
    tags: ["lenço", "seda", "acessório", "edição limitada", "estampa"],
    color: "linear-gradient(135deg,#0a1a2a,#1a4a5a)",
  },

  // ─── RESTAURANTE ───────────────────────────────────────────────
  {
    id: 9, business: "restaurante", category: "Menu Executivo",
    name: "Menu Almoço Executivo", nameEn: "Executive Lunch Menu", nameFr: "Menu Déjeuner Exécutif",
    price: 18.50, currency: "€", unit: "pessoa", minOrder: 1,
    badge: "destaque", rating: 4.9, reviews: 312,
    description: "Entrada + prato principal + sobremesa + bebida incluída. Rotação semanal de pratos com ingredientes frescos e sazonais. Inclui café ou chá.",
    descriptionEn: "Starter + main course + dessert + drink included. Weekly rotation of dishes with fresh, seasonal ingredients. Includes coffee or tea.",
    descriptionFr: "Entrée + plat principal + dessert + boisson incluse. Rotation hebdomadaire des plats avec des ingrédients frais et saisonniers.",
    specs: [
      { label: "Inclui", value: "Entrada, Principal, Sobremesa, Bebida, Café" },
      { label: "Serviço", value: "Seg — Sex, 12h00 — 15h00" },
      { label: "Reserva", value: "Recomendada para grupos > 4" },
      { label: "Alérgenos", value: "Informação disponível no menu diário" },
      { label: "Opções", value: "Carne, Peixe, Vegetariano" },
      { label: "Mesas", value: "Interior e esplanada" },
    ],
    tags: ["almoço", "executivo", "menu", "semanal"],
    color: "linear-gradient(135deg,#2a0a0a,#6a1a1a)",
  },
  {
    id: 10, business: "restaurante", category: "Catering",
    name: "Pack Catering Empresarial", nameEn: "Corporate Catering Pack", nameFr: "Pack Traiteur Entreprise",
    price: 28.00, currency: "€", unit: "pessoa", minOrder: 20,
    badge: "bestseller", rating: 4.8, reviews: 74,
    description: "Solução completa de catering para eventos corporativos. Inclui montagem, serviço de mesa, louça e equipa de 2 elementos. Preço por pessoa para mínimo 20 pax.",
    descriptionEn: "Complete catering solution for corporate events. Includes setup, table service, tableware and a 2-person team. Price per person for minimum 20 pax.",
    descriptionFr: "Solution complète de traiteur pour événements d'entreprise. Montage, service à table, vaisselle et équipe de 2 personnes inclus.",
    specs: [
      { label: "Mínimo", value: "20 pessoas" },
      { label: "Inclui", value: "Montagem, serviço, louça, equipa" },
      { label: "Duração", value: "Até 4 horas de serviço" },
      { label: "Antecedência", value: "Reserva mínima 7 dias" },
      { label: "Opções Menu", value: "Cocktail, Buffet, Serviço de prato" },
      { label: "Deslocação", value: "Incluída em raio de 30 km" },
    ],
    tags: ["catering", "empresarial", "eventos", "buffet"],
    color: "linear-gradient(135deg,#1a0a0a,#4a1a00)",
  },
  {
    id: 11, business: "restaurante", category: "Eventos",
    name: "Jantar de Gala Privado", nameEn: "Private Gala Dinner", nameFr: "Dîner de Gala Privé",
    price: 95.00, currency: "€", unit: "pessoa", minOrder: 10,
    badge: "limitado", rating: 5.0, reviews: 22,
    description: "Experiência gastronómica exclusiva com menu de degustação de 6 momentos, harmonização de vinhos, serviço dedicado e sala privativa. Reserva antecipada obrigatória.",
    descriptionEn: "Exclusive gastronomic experience with 6-course tasting menu, wine pairing, dedicated service and private room. Advance booking required.",
    descriptionFr: "Expérience gastronomique exclusive avec menu dégustation 6 services, accord mets-vins, service dédié et salle privée.",
    specs: [
      { label: "Momentos", value: "6 pratos de degustação" },
      { label: "Vinhos", value: "Harmonização incluída" },
      { label: "Sala", value: "Privativa até 30 pessoas" },
      { label: "Duração", value: "3 — 4 horas" },
      { label: "Reserva", value: "Mínimo 5 dias de antecedência" },
      { label: "Dress code", value: "Smart casual / Formal" },
    ],
    tags: ["gala", "degustação", "privado", "luxo", "vinho"],
    color: "linear-gradient(135deg,#1a0505,#5a0a0a)",
  },
  {
    id: 12, business: "restaurante", category: "Pequeno-Almoço",
    name: "Brunch Premium Fim de Semana", nameEn: "Premium Weekend Brunch", nameFr: "Brunch Premium Week-end",
    price: 24.00, currency: "€", unit: "pessoa", minOrder: 1,
    badge: "novo", rating: 4.7, reviews: 58,
    description: "Brunch completo ao fim de semana com buffet de frios, ovos no momento, fruta fresca, sumos naturais, pastelaria artesanal e bebidas quentes incluídas.",
    descriptionEn: "Complete weekend brunch with cold cuts buffet, eggs to order, fresh fruit, natural juices, artisanal pastries and hot drinks included.",
    descriptionFr: "Brunch complet le week-end avec buffet de charcuterie, œufs à la minute, fruits frais, jus naturels, pâtisseries artisanales et boissons chaudes.",
    specs: [
      { label: "Serviço", value: "Sáb e Dom, 09h30 — 13h00" },
      { label: "Inclui", value: "Buffet + Ovos + Sumos + Bebidas quentes" },
      { label: "Pastelaria", value: "Artesanal — produção própria" },
      { label: "Reserva", value: "Recomendada" },
      { label: "Crianças", value: "Menores de 5 anos gratuito" },
      { label: "Opções", value: "Vegetariano, Sem glúten" },
    ],
    tags: ["brunch", "fim de semana", "buffet", "familiar"],
    color: "linear-gradient(135deg,#2a1500,#6a3010)",
  },
];

export const CATEGORIES: Record<BusinessKey, string[]> = {
  textil:      ["Semi-Torcistas", "Fios Especiais"],
  boutique:    ["Vestuário", "Acessórios"],
  restaurante: ["Menu Executivo", "Catering", "Eventos", "Pequeno-Almoço"],
};
