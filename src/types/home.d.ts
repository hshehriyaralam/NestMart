type NavLink = {
  name: string;
  path: string;
};

export type NavItem = {
  label: string;
  dropdown: boolean;
  path?: string;
  links?: NavLink[];
};