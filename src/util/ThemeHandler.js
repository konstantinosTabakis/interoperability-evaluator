import '../assets/css/style.scss'
 
const setTheme = (theme) => {
    const root = document.documentElement;
    switch (theme) {
        case 'default':
            root?.style.setProperty("--primary-color",  "#DBA39A");
            root?.style.setProperty("--secondary-color",  "#F0DBDB");
            root?.style.setProperty("--third-color",  "#F5EBE0");
            root?.style.setProperty("--fourth-color",  "#FEFCF3");
            break;
        case 'green':
            root?.style.setProperty("--primary-color",  "#8EC3B0");
            root?.style.setProperty("--secondary-color",  "#9ED5C5");
            root?.style.setProperty("--third-color",  "#BCEAD5");
            root?.style.setProperty("--fourth-color",  "#DEF5E5");
            break;
        default:
            break;
    }
     
}

export default setTheme