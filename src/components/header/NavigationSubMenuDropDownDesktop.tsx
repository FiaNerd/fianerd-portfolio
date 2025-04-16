import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { navRoutes } from '../../config/MenuItemsData';
import { startTransition, Suspense } from 'react';

interface IProps {
  navigationMenu: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  closeMenuOnClick: () => void;
}

const NavigationSubMenuDropDownDesktop = ({
  navigationMenu,
  onMouseEnter,
  onMouseLeave,
  closeMenuOnClick,
}: IProps) => {
  const { t } = useTranslation('translation');
  const navigate = useNavigate();

  const handleMenuClick = (
    e: React.MouseEvent,
    url: string,
    sectionId?: string
  ) => {
    e.preventDefault();

    // Navigate to the base route if not already there
    if (location.pathname !== url) {
      navigate(url);
    }

    startTransition(() => {
      // Scroll to the section after navigation
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            console.warn(`Section with ID "${sectionId}" not found.`);
          }
        }, 300);
      }
    });

    closeMenuOnClick();
  };

  const currentMenu = navRoutes.find((menu) => menu.title === navigationMenu);

  if (!currentMenu || !currentMenu.subMenu) {
    return null;
  }

  return (
    <div
      className="absolute z-10 bg-nav-text dark:bg-[#1b0909] shadow-sm p-4 rounded mt-[3.8em]"
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
              ? 'bg-gradient-to-br from-[#fff5d7] to-[#edd8bf] dark:from-[#1b0909] dark:to-[#240313]'
              : 'bg-gradient-to-br from-[#fff5d7] to-[#edd8bf] dark:from-[#1b0909] dark:to-[#240313]'
          }`}
        >
          <img
            src={
              navigationMenu === 'profile'
                ? '/assets/images/profile-img.jpg'
                : '/assets/images/portfolio/portfolio-img.jpg'
            }
            alt={navigationMenu}
            className="w-full h-auto object-cover rounded-lg mb-4"
          />
          <p className="block font-bold text-base">
            {navigationMenu === 'profile'
              ? t('subMenu.titleProfile')
              : t('subMenu.titlePortfolio')}
          </p>
          <p className="block text-sm opacity-70 text-accent-primary">
            {navigationMenu === 'profile'
              ? t('subMenu.subTitleProfile')
              : t('subMenu.subTitlePortfolio')}
          </p>
        </div>

        {/* Submenu Section */}
        <Suspense fallback={<div>Loading...</div>}>
          <div className="col-span-2 grid gap-6 grid-cols-2 xl:grid-cols-2 p-4 bg-bg-primary">
            {currentMenu.subMenu.map((subMenu, index) => (
              <div key={index} className="flex flex-col">
                <NavLink
                  to={subMenu.url}
                  className="text-lg font-medium font-sub-heading text-nav-text hover:text-nav-hover"
                  onClick={(e) =>
                    startTransition(() => {
                      handleMenuClick(e, subMenu.url, subMenu.sectionId);
                    })
                  } 
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: t(subMenu.title) }}
                  />
                </NavLink>
                {subMenu.description && (
                  <span
                    className="block text-xs text-text-primary font-light leading-6 opacity-70"
                    dangerouslySetInnerHTML={{
                      __html: t(subMenu.description),
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default NavigationSubMenuDropDownDesktop;
