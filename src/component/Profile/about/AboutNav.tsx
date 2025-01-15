// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { NavLink, To } from "react-router-dom";

// import useAnimateIn from "../../../hook/useAnimation";
// import SectionPlate from "../../Partial/SectionPlate";
// import { navRoutes } from "../../../config/MenuItemsData";

// const AboutNav = () => {
//     const { t } = useTranslation('home');
//     const { ref, ctrls, vars } = useAnimateIn({
//         duration: 0.95,
//     });

//     return (
//         <SectionPlate>
//             <ul className=" flex flex-wrap gap-6 md:gap-20 justify-center mx-auto mb-12 pb-8">
//                 {navRoutes.map((item: { title: any; url: To; }) => {
//                     return (
//                         <motion.li 
//                             ref={ref} 
//                             initial="hidden" 
//                             animate={ctrls} 
//                             variants={vars} 
//                             key={item.title} 
//                             className="flex"
//                         >
//                             <NavLink
//                                 to={item.url}
//                                 className="text-sm md:text-lg lg:text-xl font-heading text-hover-text hover:underline active:text-accent-secondary  hover:text-accent-secondary hover:underline-offset-8 focus:underline focus:underline-offset-8 focus:text-accent-secondary"
//                             >
//                                 {t(item.title)}
//                             </NavLink>
//                         </motion.li>
//                     );
//                 })}
//             </ul>
//         </SectionPlate>
//     );
// }

// export default AboutNav;
