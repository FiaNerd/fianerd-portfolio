// Interface for the navigation routes
export interface AboutRoute {
    title: string; 
    url: string;  
}


export const aboutRoutes: AboutRoute[] = [
    {
        title: 'Me',
        url: '/#profile',
    },
    {
        title: 'Skills',
        url: '/#skills',
    },
    {
        title: 'Experience',
        url: '/#work-experience',
    },
    {
        title: 'Education',
        url: '/#education',
    },
    {
        title: 'Hobbies',
        url: '/#hobbies',
    },
];
