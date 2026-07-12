import { createBrowserRouter, createMemoryRouter, type InitialEntry } from "react-router-dom";
import type { ReactElement } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { CooperationPage } from "../pages/CooperationPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { OrganizationPage } from "../pages/OrganizationPage";
import { ResearchPage } from "../pages/ResearchPage";
import { StudentsPage } from "../pages/StudentsPage";
import { routes, type RouteKey } from "./routes";

const pageByKey: Record<RouteKey, ReactElement> = {
  home: <HomePage />,
  about: <AboutPage />,
  organization: <OrganizationPage />,
  research: <ResearchPage />,
  cooperation: <CooperationPage />,
  students: <StudentsPage />,
  contact: <ContactPage />,
};

const children = [
  ...routes.map((route) =>
    route.key === "home"
      ? { index: true as const, element: pageByKey.home }
      : { path: route.path.slice(1), element: pageByKey[route.key] },
  ),
  { path: "*", element: <NotFoundPage /> },
];
const config = [{ path: "/", element: <PageLayout />, children }];

export const router = createBrowserRouter(config);
export function createAppRouter(initialEntries: InitialEntry[]) {
  return createMemoryRouter(config, { initialEntries });
}
