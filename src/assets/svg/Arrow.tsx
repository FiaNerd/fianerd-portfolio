import { Menu } from '../../interfaces/MenuInterface';
const Arrow = ({
  navigationMenuOpen,
  navigationMenu,
  menu,
}: Menu.ArrowProps) => {
  return (
    <svg
      className={`relative top-[1px] ml-1 h-5 w-5 ease-out duration-300 ${
        navigationMenuOpen &&
        navigationMenu &&
        menu?.title &&
        navigationMenu === menu.title
          ? '-rotate-180'
          : ''
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <title>{menu?.title ? `${menu.title} Arrow Icon` : 'Arrow Icon'}</title>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export default Arrow;
