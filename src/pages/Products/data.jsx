import { v4 as uuidv4 } from "uuid";

export const optionsOrder = [
  {
    id: uuidv4(),
    label: "Tarixə görə",
    actions: {
      sortBy: "created",
      sortDirection: "desc",
    },
    active: true,
  },
  {
    id: uuidv4(),
    label: "Ən bahalılar",
    actions: {
      sortBy: "price",
      sortDirection: "desc",
    },
    active: false,
  },
  {
    id: uuidv4(),
    label: "Ən ucuzlar",
    actions: {
      sortBy: "price",
      sortDirection: "asc",
    },
    active: false,
  },
];