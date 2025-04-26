export const routes = {
  home: {
    url: "/",
    pathname: "/",
  },
  detail: {
    url: (id?: string) => `/detail/${id}`,
    pathname: "/detail",
  },
};
