type Product = {
  id: number;
  code: string;
  categoryId: number;
  name: string;
};

const products: Product[] = [
    ...Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        code: `P-${(i + 1).toString().padStart(3, '0')}`,
        categoryId: (i % 10) + 1,
        name: `Product ${(i + 1).toString().padStart(3, '0')}`,
    }))
];

export type ProductResponse = {
  products: Product[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
};

export default function getProducts(page: number, limit: number) {
  const start = (page - 1) * limit;
  const end = start + limit;
  const response: ProductResponse = {
    products: products.slice(start, end),
    meta: {
      total: products.length,
      totalPage: Math.ceil(products.length / limit),
      page,
      limit,
    },
  };
  return response;
}
