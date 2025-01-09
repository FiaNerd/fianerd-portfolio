import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { navRoutes } from '../../config/MenuItemsData';

interface IProps {
  navigationMenu: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  closeMenuOnClick: () => void;
}

const NavigationSubMenu = ({
  navigationMenu,
  onMouseEnter,
  onMouseLeave,
  closeMenuOnClick,
}: IProps) => {
  const { t } = useTranslation('translation');
  const currentRoute = navRoutes.find((route) => route.title === navigationMenu);

  if (!currentRoute?.subMenu?.length) return null;

  return (
    <div
      className="absolute z-10 bg-nav-text dark:bg-[#1b0909] shadow-sm p-4 rounded mt-[3.8em] "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`grid gap-4 ${
          navigationMenu === 'profile' ? 'grid-cols-3' : 'grid-cols-3'
        } max-w-[45em]`}
      >
        {/* Profile or Portfolio Section */}
        <div
          className={`rounded p-4 col-span-1 ${
            navigationMenu === 'profile'
              ? 'bg-gradient-to-br from-neutral-800 to-black'
              : 'bg-gradient-to-br from-blue-800 to-blue-500'
          }`}
        >
          <img
            src={
              navigationMenu === 'profile'
                ? 'path-to-profile-image.jpg'
                : 'path-to-portfolio-image.jpg'
            }
            alt={navigationMenu}
            className="w-24 h-24 object-cover rounded-lg mb-4"
          />
          <span className="block font-bold text-base">
            {navigationMenu === 'profile' ? 'Profile' : 'Portfolio'}
          </span>
          <span className="block text-sm opacity-70">
            {navigationMenu === 'profile'
              ? 'A personal profile showcasing my skills'
              : 'A collection of my best works'}
          </span>
        </div>

        {/* Submenu Section */}
        <div className="col-span-2 grid gap-6 grid-cols-2 xl:grid-cols-2 p-4 bg-bg-primary">
          {currentRoute.subMenu.map((subMenuItem, subIndex) => (
            <div key={subIndex} className="flex flex-col">
              <NavLink
                to={subMenuItem.url}
                className="text-lg font-medium font-sub-heading text-nav-text hover:text-nav-hover"
                onClick={closeMenuOnClick}
              >
                {t(subMenuItem.title)}
              </NavLink>
              {subMenuItem.description && (
                <span className="block text-xs text-text-primary font-light leading-6 opacity-70">
                  {t(subMenuItem.description)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationSubMenu;
