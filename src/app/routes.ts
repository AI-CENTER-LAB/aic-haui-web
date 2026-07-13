export type RouteKey =
  "home" | "about" | "organization" | "research" | "cooperation" | "students" | "contact";

export type SiteRoute = { key: RouteKey; path: string; label: string; nav: boolean };

export const routes: SiteRoute[] = [
  { key: "home", path: "/", label: "Trang chủ", nav: false },
  { key: "about", path: "/ve-chung-toi", label: "Về chúng tôi", nav: true },
  { key: "organization", path: "/to-chuc", label: "Tổ chức", nav: true },
  { key: "research", path: "/nghien-cuu", label: "Nghiên cứu", nav: true },
  { key: "cooperation", path: "/hop-tac", label: "Hợp tác", nav: true },
  { key: "students", path: "/sinh-vien", label: "Dành cho sinh viên", nav: true },
  { key: "contact", path: "/lien-he", label: "Liên hệ", nav: true },
];

export const navigationRoutes = routes.filter((route) => route.nav);
export const routePath = Object.fromEntries(
  routes.map((route) => [route.key, route.path]),
) as Record<RouteKey, string>;
