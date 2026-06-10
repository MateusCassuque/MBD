export type Lang = "pt" | "en" | "fr";

export interface T {
  nav: { about: string; businesses: string; services: string; contact: string };
  hero: { tag: string; title1: string; title2: string; desc: string; cta1: string; cta2: string };
  about: {
    badge: string; label: string; title1: string; title2: string;
    p1: string; p2: string; p3: string;
    stat: { sectors: string; ambition: string; quality: string; service: string };
  };
  biz: {
    label: string; title1: string; title2: string;
    items: { cat: string; name: string; desc: string; icon: string }[];
  };
  svc: {
    label: string; title1: string; title2: string; desc: string;
    items: { title: string; sub: string }[];
  };
  ct: {
    label: string; title1: string; title2: string;
    form: { name: string; email: string; subject: string; msg: string; send: string; opts: string[] };
    info: { address: string; addressVal: string; email: string; phone: string; hours: string; hoursVal: string };
  };
  footer: { rights: string };
}

export const translations: Record<Lang, T> = {
  pt: {
    nav: { about: "Sobre", businesses: "Empresas", services: "Serviços", contact: "Contacto" },
    hero: {
      tag: "Grupo de Referência",
      title1: "Excelência",
      title2: "em cada detalhe",
      desc: "O Grupo MBD é uma referência no comércio e prestação de serviços, com presença em restauração, moda e comercialização têxtil. Construímos valor com distinção.",
      cta1: "Descobrir",
      cta2: "Contacto",
    },
    about: {
      badge: "Grupo MBD",
      label: "Quem Somos",
      title1: "Visão",
      title2: "que transforma",
      p1: "O Grupo MBD nasceu da convicção de que excelência e proximidade são complementares. Actuamos em múltiplos sectores da economia, com uma gestão rigorosa e uma visão de longo prazo.",
      p2: "Das nossas mesas de restaurante à nossa boutique, passando pela comercialização de semi-torcistas de tecidos, cada empresa do grupo partilha um compromisso inabalável com a qualidade.",
      p3: "Somos um grupo com raízes sólidas e ambição de crescimento, criando valor para os nossos clientes, parceiros e comunidades.",
      stat: { sectors: "Sectores", ambition: "Ambição", quality: "Qualidade", service: "Dedicação" },
    },
    biz: {
      label: "As Nossas Empresas",
      title1: "Três pilares,",
      title2: "uma visão",
      items: [
        { cat: "Restauração", name: "MBD Restaurante", desc: "Uma experiência gastronómica cuidada, onde cada refeição é preparada com ingredientes de qualidade e servida com elegância.", icon: "🍽" },
        { cat: "Moda & Estilo", name: "MBD Boutique", desc: "Uma selecção cuidada de peças de moda e acessórios, onde a estética e a distinção definem cada colecção.", icon: "👗" },
        { cat: "Têxtil", name: "MBD Têxtil", desc: "Comercialização de semi-torcistas de tecidos, com rigor técnico e relações comerciais sólidas com os melhores fornecedores.", icon: "🧵" },
      ],
    },
    svc: {
      label: "O Que Fazemos",
      title1: "Serviços",
      title2: "de referência",
      desc: "Cada área do grupo foi desenvolvida para oferecer uma proposta de valor única e distinta no seu sector.",
      items: [
        { title: "Gastronomia & Restauração", sub: "Experiências culinárias — Eventos — Catering" },
        { title: "Moda & Retail de Luxo", sub: "Boutique — Consultoria de estilo — Coleções" },
        { title: "Comércio Têxtil", sub: "Semi-torcistas — Fornecimento B2B — Tecidos" },
        { title: "Parcerias Estratégicas", sub: "Colaborações — Investimento — Expansão" },
      ],
    },
    ct: {
      label: "Fale Connosco",
      title1: "Construamos",
      title2: "algo juntos",
      form: {
        name: "Nome", email: "Email", subject: "Assunto", msg: "Mensagem", send: "Enviar Mensagem",
        opts: ["Restauração", "Boutique", "Têxtil", "Parcerias", "Outro"],
      },
      info: {
        address: "Morada", addressVal: "A definir pelo Grupo MBD",
        email: "Email", phone: "Telefone",
        hours: "Horário", hoursVal: "Segunda — Sexta\n09:00 — 18:00",
      },
    },
    footer: { rights: "Todos os direitos reservados." },
  },

  en: {
    nav: { about: "About", businesses: "Businesses", services: "Services", contact: "Contact" },
    hero: {
      tag: "Reference Group",
      title1: "Excellence",
      title2: "in every detail",
      desc: "MBD Group is a benchmark in commerce and service provision, with presence in restaurants, fashion, and textile trading. We build value with distinction.",
      cta1: "Discover",
      cta2: "Contact",
    },
    about: {
      badge: "MBD Group",
      label: "Who We Are",
      title1: "Vision",
      title2: "that transforms",
      p1: "MBD Group was born from the conviction that excellence and proximity are complementary. We operate in multiple economic sectors with rigorous management and a long-term vision.",
      p2: "From our restaurant tables to our boutique, through textile trading, each company in the group shares an unwavering commitment to quality.",
      p3: "We are a group with solid roots and growth ambition, creating value for our clients, partners, and communities.",
      stat: { sectors: "Sectors", ambition: "Ambition", quality: "Quality", service: "Dedication" },
    },
    biz: {
      label: "Our Businesses",
      title1: "Three pillars,",
      title2: "one vision",
      items: [
        { cat: "Restaurant", name: "MBD Restaurant", desc: "A curated gastronomic experience where every meal is prepared with quality ingredients and served with elegance.", icon: "🍽" },
        { cat: "Fashion & Style", name: "MBD Boutique", desc: "A carefully curated selection of fashion pieces and accessories, where aesthetics and distinction define each collection.", icon: "👗" },
        { cat: "Textiles", name: "MBD Textiles", desc: "Trading of semi-twisted fabric yarns with technical precision and strong commercial relationships with the best suppliers.", icon: "🧵" },
      ],
    },
    svc: {
      label: "What We Do",
      title1: "Reference",
      title2: "Services",
      desc: "Each area of the group was developed to offer a unique and distinctive value proposition in its sector.",
      items: [
        { title: "Gastronomy & Restaurant", sub: "Culinary experiences — Events — Catering" },
        { title: "Fashion & Luxury Retail", sub: "Boutique — Style consulting — Collections" },
        { title: "Textile Commerce", sub: "Semi-twisted — B2B supply — Fabrics" },
        { title: "Strategic Partnerships", sub: "Collaborations — Investment — Expansion" },
      ],
    },
    ct: {
      label: "Get In Touch",
      title1: "Let's build",
      title2: "something together",
      form: {
        name: "Name", email: "Email", subject: "Subject", msg: "Message", send: "Send Message",
        opts: ["Restaurant", "Boutique", "Textiles", "Partnerships", "Other"],
      },
      info: {
        address: "Address", addressVal: "To be defined by MBD Group",
        email: "Email", phone: "Phone",
        hours: "Hours", hoursVal: "Monday — Friday\n09:00 — 18:00",
      },
    },
    footer: { rights: "All rights reserved." },
  },

  fr: {
    nav: { about: "À propos", businesses: "Entreprises", services: "Services", contact: "Contact" },
    hero: {
      tag: "Groupe de Référence",
      title1: "Excellence",
      title2: "dans chaque détail",
      desc: "Le Groupe MBD est une référence dans le commerce et la prestation de services, avec une présence dans la restauration, la mode et le commerce textile.",
      cta1: "Découvrir",
      cta2: "Contact",
    },
    about: {
      badge: "Groupe MBD",
      label: "Qui Sommes-Nous",
      title1: "Vision",
      title2: "qui transforme",
      p1: "Le Groupe MBD est né de la conviction que excellence et proximité sont complémentaires. Nous opérons dans plusieurs secteurs économiques avec une gestion rigoureuse.",
      p2: "De nos tables de restaurant à notre boutique, en passant par le commerce textile, chaque entreprise du groupe partage un engagement indéfectible envers la qualité.",
      p3: "Nous sommes un groupe aux racines solides et à l'ambition de croissance, créant de la valeur pour nos clients, partenaires et communautés.",
      stat: { sectors: "Secteurs", ambition: "Ambition", quality: "Qualité", service: "Dédication" },
    },
    biz: {
      label: "Nos Entreprises",
      title1: "Trois piliers,",
      title2: "une vision",
      items: [
        { cat: "Restauration", name: "MBD Restaurant", desc: "Une expérience gastronomique soignée, où chaque repas est préparé avec des ingrédients de qualité et servi avec élégance.", icon: "🍽" },
        { cat: "Mode & Style", name: "MBD Boutique", desc: "Une sélection soignée de pièces de mode et d'accessoires, où l'esthétique et la distinction définissent chaque collection.", icon: "👗" },
        { cat: "Textile", name: "MBD Textile", desc: "Commerce de semi-torsadés de tissus avec rigueur technique et relations commerciales solides avec les meilleurs fournisseurs.", icon: "🧵" },
      ],
    },
    svc: {
      label: "Ce Que Nous Faisons",
      title1: "Services",
      title2: "de référence",
      desc: "Chaque domaine du groupe a été développé pour offrir une proposition de valeur unique et distincte dans son secteur.",
      items: [
        { title: "Gastronomie & Restauration", sub: "Expériences culinaires — Événements — Traiteur" },
        { title: "Mode & Retail de Luxe", sub: "Boutique — Conseil en style — Collections" },
        { title: "Commerce Textile", sub: "Semi-torsadés — Fourniture B2B — Tissus" },
        { title: "Partenariats Stratégiques", sub: "Collaborations — Investissement — Expansion" },
      ],
    },
    ct: {
      label: "Contactez-Nous",
      title1: "Construisons",
      title2: "quelque chose ensemble",
      form: {
        name: "Nom", email: "Email", subject: "Sujet", msg: "Message", send: "Envoyer",
        opts: ["Restauration", "Boutique", "Textile", "Partenariats", "Autre"],
      },
      info: {
        address: "Adresse", addressVal: "À définir par le Groupe MBD",
        email: "Email", phone: "Téléphone",
        hours: "Horaires", hoursVal: "Lundi — Vendredi\n09:00 — 18:00",
      },
    },
    footer: { rights: "Tous droits réservés." },
  },
};
