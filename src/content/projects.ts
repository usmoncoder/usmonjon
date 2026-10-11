import type { Project, ProjectKind } from "./types";

export const projects: Project[] = [
  {
    slug: "thehotelsaas",
    name: "TheHotelSaaS",
    kind: "saas",
    year: "2026",
    client: null,
    featured: true,
    cover: "/images/projects/thehotelsaas.webp",
    logo: "/images/brands/thehotelsaas.webp",
    gallery: [],
    links: [
      {
        label: "thehotelsaas.com",
        href: "https://thehotelsaas.com",
        kind: "live",
      },
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "SerpAPI", "Tailwind CSS"],
    collaborator: "Umidjon Agency",
    contribution: {
      uz: "Umidjon Agency jamoasi tarkibida ishlab chiqilgan loyiha.",
      ru: "Проект создан в составе команды Umidjon Agency.",
      en: "Built as part of the Umidjon Agency team.",
    },
    integrations: ["Google Hotels", "Booking", "Expedia", "Agoda", "SerpAPI"],
    components: [],
    tagline: {
      uz: "Mehmonxonalar uchun SaaS platforma",
      ru: "SaaS-платформа для отелей",
      en: "SaaS platform for hotels",
    },
    problem: {
      uz: "Mehmonxonalar boshqaruvni qo'lda olib boradi va raqobatchilarning OTA platformalaridagi narxlarini kuzata olmaydi.",
      ru: "Отели ведут управление вручную и не могут отслеживать цены конкурентов на OTA-платформах.",
      en: "Hotels run operations by hand and cannot track competitor pricing across OTA platforms.",
    },
    solution: {
      uz: "RateRadar nomi bilan narx monitoringi sifatida boshlangan va to'liq boshqaruv platformasiga o'sgan mahsulot.",
      ru: "Продукт начинался как мониторинг цен под именем RateRadar и вырос в полноценную платформу управления.",
      en: "Started as a rate-monitoring tool called RateRadar and grew into a full management platform.",
    },
    result: {
      uz: "Ishlab turgan tizim — internetda ochiq va foydalanishda.",
      ru: "Работающая система — доступна онлайн и используется.",
      en: "A live system, online and in use.",
    },
  },
  {
    slug: "artsuzani",
    name: "ArtSuzani",
    kind: "ecommerce",
    year: "2025",
    client: "ArtSuzani",
    featured: true,
    cover: "/images/projects/artsuzani.webp",
    logo: "/images/brands/artsuzani.webp",
    gallery: [],
    links: [{ label: "artsuzani.com", href: "https://artsuzani.com", kind: "live" }],
    stack: ["Next.js 14", "TypeScript", "Stripe", "Sanity CMS"],
    collaborator: "Umidjon Agency",
    contribution: {
      uz: "Umidjon Agency jamoasi tarkibida ishlab chiqilgan loyiha.",
      ru: "Проект создан в составе команды Umidjon Agency.",
      en: "Built as part of the Umidjon Agency team.",
    },
    integrations: ["Stripe", "Sanity"],
    components: [],
    tagline: {
      uz: "O'zbek hunarmandchiligi uchun premium onlayn do'kon",
      ru: "Премиальный магазин узбекских ремёсел",
      en: "Premium e-commerce for Uzbek handicrafts",
    },
    problem: {
      uz: "Hunarmandchilik brendiga xalqaro xaridorga sotadigan do'kon kerak edi.",
      ru: "Ремесленному бренду нужен был магазин для продаж международным покупателям.",
      en: "A handicraft brand needed a store that sells to international buyers.",
    },
    solution: {
      uz: "Savat, sevimlilar, Stripe to'lovi va CMS orqali boshqariladigan katalog.",
      ru: "Корзина, избранное, оплата через Stripe и каталог под управлением CMS.",
      en: "Cart, wishlist, Stripe checkout and a CMS-driven catalogue.",
    },
    result: {
      uz: "Ishlayotgan do'kon — xalqaro to'lov qabul qiladi.",
      ru: "Работающий магазин с приёмом международных платежей.",
      en: "A live store accepting international payments.",
    },
  },
  {
    slug: "bukhara-suzana",
    name: "Bukhara Suzana",
    kind: "ecommerce",
    year: "2024",
    client: "Bukhara Suzana",
    featured: false,
    cover: "/images/projects/bukhara-suzana.webp",
    logo: null,
    gallery: [],
    links: [
      {
        label: "bukhara-suzana.uz",
        href: "https://www.bukhara-suzana.uz",
        kind: "live",
      },
    ],
    stack: ["React", "Tailwind CSS", "Vite"],
    collaborator: "Umidjon Agency",
    contribution: {
      uz: "Umidjon Agency jamoasi tarkibida ishlab chiqilgan loyiha.",
      ru: "Проект создан в составе команды Umidjon Agency.",
      en: "Built as part of the Umidjon Agency team.",
    },
    integrations: [],
    components: [],
    tagline: {
      uz: "Hunarmand brendi uchun do'kon",
      ru: "Магазин ремесленного бренда",
      en: "Storefront for an artisan brand",
    },
    problem: {
      uz: "Brendga mahsulotlarini ko'rsatadigan va so'rov qabul qiladigan sayt kerak edi.",
      ru: "Бренду нужен был сайт, показывающий товары и принимающий заявки.",
      en: "The brand needed a site to show products and take enquiries.",
    },
    solution: {
      uz: "Mahsulot galereyasi, dinamik filtr va WhatsApp orqali so'rov oqimi.",
      ru: "Галерея товаров, динамический фильтр и поток заявок через WhatsApp.",
      en: "Product gallery, dynamic filtering and a WhatsApp enquiry flow.",
    },
    result: null,
  },
  {
    slug: "sara-silvers",
    name: "SARA SILVERS",
    kind: "ecommerce",
    year: "2025",
    client: "SARA SILVERS",
    featured: false,
    cover: "/images/projects/sara-silvers.webp",
    logo: null,
    gallery: [],
    links: [
      { label: "sarasilvers.uz", href: "https://www.sarasilvers.uz", kind: "live" },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    collaborator: "Umidjon Agency",
    contribution: {
      uz: "Umidjon Agency jamoasi tarkibida ishlab chiqilgan loyiha.",
      ru: "Проект создан в составе команды Umidjon Agency.",
      en: "Built as part of the Umidjon Agency team.",
    },
    integrations: [],
    components: [],
    tagline: {
      uz: "Zargarlik brendi uchun onlayn do'kon",
      ru: "Интернет-магазин ювелирного бренда",
      en: "Online store for a jewellery brand",
    },
    problem: {
      uz: "Zargarlik mahsulotini ekranda ham qimmatbaho ko'rsatish kerak edi.",
      ru: "Нужно было показать ювелирные изделия дорого и на экране.",
      en: "Jewellery had to look as valuable on screen as it does in hand.",
    },
    solution: {
      uz: "Mahsulot zoom, silliq sahifa o'tishlari va savat.",
      ru: "Зум товара, плавные переходы между страницами и корзина.",
      en: "Product zoom, smooth page transitions and a cart.",
    },
    result: null,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

/* Filters follow the list: a kind with no project behind it never shows. */
const kindOrder: ProjectKind[] = [
  "saas",
  "web",
  "ecommerce",
  "mobile",
  "bot",
  "game",
  "business",
];

export const projectKinds = [
  "all",
  ...kindOrder.filter((kind) => projects.some((project) => project.kind === kind)),
] as const;

export type ProjectFilter = "all" | ProjectKind;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
