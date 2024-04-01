export const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

export const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );

  return searchedProducts;
};

export const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

export const createQueryObject = (currentQuerry, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuerry;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuerry;
    return rest;
  }
  return {
    ...currentQuerry,
    ...newQuery,
  };
};

export const getInitialquery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};
