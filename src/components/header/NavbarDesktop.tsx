import { Suspense } from 'react';
import NavigationMenu from './NavigationMenu';
import LoadingSpinner from '../partials/LoadingSpinner';

const NavbarDesktop = () => {
  return (
    <div className="hidden font-bold text-sm lg:flex lg:flex-row items-baseline py-2">
      <Suspense fallback={<LoadingSpinner />}>
        {/* Navigation Menu */}
        <NavigationMenu />
      </Suspense>
    </div>
  );
};

export default NavbarDesktop;
