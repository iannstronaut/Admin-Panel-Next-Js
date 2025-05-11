type Category = {
  id: number;
  code: string;
  name: string;
};

const categories: Category[] = [
  { id: 1, code: "CAT001", name: "Category 1" },
  { id: 2, code: "CAT002", name: "Category 2" },
  { id: 3, code: "CAT003", name: "Category 3" },
  { id: 4, code: "CAT004", name: "Category 4" },
  { id: 5, code: "CAT005", name: "Category 5" },
  { id: 6, code: "CAT006", name: "Category 6" },
  { id: 7, code: "CAT007", name: "Category 7" },
  { id: 8, code: "CAT008", name: "Category 8" },
  { id: 9, code: "CAT009", name: "Category 9" },
  { id: 10, code: "CAT010", name: "Category 10" },
  { id: 11, code: "CAT011", name: "Category 11" },
  { id: 12, code: "CAT012", name: "Category 12" },
  { id: 13, code: "CAT013", name: "Category 13" },
  { id: 14, code: "CAT014", name: "Category 14" },
  { id: 15, code: "CAT015", name: "Category 15" },
  { id: 16, code: "CAT016", name: "Category 16" },
  { id: 17, code: "CAT017", name: "Category 17" },
  { id: 18, code: "CAT018", name: "Category 18" },
  { id: 19, code: "CAT019", name: "Category 19" },
  { id: 20, code: "CAT020", name: "Category 20" },
  { id: 21, code: "CAT021", name: "Category 21" },
  { id: 22, code: "CAT022", name: "Category 22" },
  { id: 23, code: "CAT023", name: "Category 23" },
  { id: 24, code: "CAT024", name: "Category 24" },
  { id: 25, code: "CAT025", name: "Category 25" },
  { id: 26, code: "CAT026", name: "Category 26" },
  { id: 27, code: "CAT027", name: "Category 27" },
  { id: 28, code: "CAT028", name: "Category 28" },
  { id: 29, code: "CAT029", name: "Category 29" },
  { id: 30, code: "CAT030", name: "Category 30" },
  { id: 31, code: "CAT031", name: "Category 31" },
  { id: 32, code: "CAT032", name: "Category 32" },
  { id: 33, code: "CAT033", name: "Category 33" },
  { id: 34, code: "CAT034", name: "Category 34" },
  { id: 35, code: "CAT035", name: "Category 35" },
  { id: 36, code: "CAT036", name: "Category 36" },
  { id: 37, code: "CAT037", name: "Category 37" },
  { id: 38, code: "CAT038", name: "Category 38" },
  { id: 39, code: "CAT039", name: "Category 39" },
  { id: 40, code: "CAT040", name: "Category 40" },
  { id: 41, code: "CAT041", name: "Category 41" },
  { id: 42, code: "CAT042", name: "Category 42" },
  { id: 43, code: "CAT043", name: "Category 43" },
  { id: 44, code: "CAT044", name: "Category 44" },
  { id: 45, code: "CAT045", name: "Category 45" },
  { id: 46, code: "CAT046", name: "Category 46" },
  { id: 47, code: "CAT047", name: "Category 47" },
  { id: 48, code: "CAT048", name: "Category 48" },
  { id: 49, code: "CAT049", name: "Category 49" },
  { id: 50, code: "CAT050", name: "Category 50" },
  { id: 51, code: "CAT051", name: "Category 51" },
  { id: 52, code: "CAT052", name: "Category 52" },
  { id: 53, code: "CAT053", name: "Category 53" },
  { id: 54, code: "CAT054", name: "Category 54" },
  { id: 55, code: "CAT055", name: "Category 55" },
  { id: 56, code: "CAT056", name: "Category 56" },
  { id: 57, code: "CAT057", name: "Category 57" },
  { id: 58, code: "CAT058", name: "Category 58" },
  { id: 59, code: "CAT059", name: "Category 59" },
  { id: 60, code: "CAT060", name: "Category 60" },
  { id: 61, code: "CAT061", name: "Category 61" },
  { id: 62, code: "CAT062", name: "Category 62" },
  { id: 63, code: "CAT063", name: "Category 63" },
  { id: 64, code: "CAT064", name: "Category 64" },
  { id: 65, code: "CAT065", name: "Category 65" },
  { id: 66, code: "CAT066", name: "Category 66" },
  { id: 67, code: "CAT067", name: "Category 67" },
  { id: 68, code: "CAT068", name: "Category 68" },
  { id: 69, code: "CAT069", name: "Category 69" },
  { id: 70, code: "CAT070", name: "Category 70" },
  { id: 71, code: "CAT071", name: "Category 71" },
  { id: 72, code: "CAT072", name: "Category 72" },
  { id: 73, code: "CAT073", name: "Category 73" },
  { id: 74, code: "CAT074", name: "Category 74" },
  { id: 75, code: "CAT075", name: "Category 75" },
  { id: 76, code: "CAT076", name: "Category 76" },
  { id: 77, code: "CAT077", name: "Category 77" },
  { id: 78, code: "CAT078", name: "Category 78" },
  { id: 79, code: "CAT079", name: "Category 79" },
  { id: 80, code: "CAT080", name: "Category 80" },
  { id: 81, code: "CAT081", name: "Category 81" },
  { id: 82, code: "CAT082", name: "Category 82" },
  { id: 83, code: "CAT083", name: "Category 83" },
  { id: 84, code: "CAT084", name: "Category 84" },
  { id: 85, code: "CAT085", name: "Category 85" },
  { id: 86, code: "CAT086", name: "Category 86" },
  { id: 87, code: "CAT087", name: "Category 87" },
  { id: 88, code: "CAT088", name: "Category 88" },
  { id: 89, code: "CAT089", name: "Category 89" },
  { id: 90, code: "CAT090", name: "Category 90" },
  { id: 91, code: "CAT091", name: "Category 91" },
  { id: 92, code: "CAT092", name: "Category 92" },
  { id: 93, code: "CAT093", name: "Category 93" },
  { id: 94, code: "CAT094", name: "Category 94" },
  { id: 95, code: "CAT095", name: "Category 95" },
  { id: 96, code: "CAT096", name: "Category 96" },
  { id: 97, code: "CAT097", name: "Category 97" },
  { id: 98, code: "CAT098", name: "Category 98" },
  { id: 99, code: "CAT099", name: "Category 99" },
  { id: 100, code: "CAT100", name: "Category 100" },
];

export type CategoryResponse = {
  categories: Category[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
};

export default function getCategories(page: number, limit: number) {
  const start = (page - 1) * limit;
  const end = start + limit;
  const response: CategoryResponse = {
    categories: categories.slice(start, end),
    meta: {
      total: categories.length,
      totalPage: Math.ceil(categories.length / limit),
      page,
      limit,
    },
  };
  return response;
}
