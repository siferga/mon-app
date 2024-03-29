import Home from '../PortfolioContainer/Home/Home';
import AboutMe from '../PortfolioContainer/AboutMe/AboutMe';
import Projects from '../PortfolioContainer/Projects/Projects';
import ContactMe from '../PortfolioContainer/ContactMe/ContactMe';



export const TOTAL_SCREENS = [
    {
        screen_name: "Accueil",
        component: Home,
    },
    {
        screen_name: "A propos de moi",
        component: AboutMe,
    },
    {
        screen_name: "Projets",
        component: Projects,
    },
    {
        screen_name: "Me contacter",
        component: ContactMe,
    },
    
];

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1;

    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
};