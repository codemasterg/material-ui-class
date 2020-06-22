/**
 * Toolbar Tab names, associated paths (links), and labels.
 */
const tabIndexToPathMap = {
    0: {
        path: "/",
        label: "Home",
    },
    1: {
        path: "/services",
        label: "Services",
        submenuItems: [
            // Services is repeated because popup menu obscures original services tab
            {
                path: "/services",
                label: "Services"
            },
            {
                path: "/customsoftware",
                label: "Custom Software Development"
            },
            {
                path: "/mobileapps",
                label: "Mobile Applications"
            },
            {
                path: "/websites",
                label: "Websites"
            }
        ]
    },
    2: {
        path: "/revolution",
        label: "The Revolution",
    },
    3: {
        path: "/about",
        label: "About Us",
    },
    4: {
        path: "/contact",
        label: "Contact Us",
    },
    5: {
        path: "/estimate",
        label: "Free Estimate",
        noMenu: true,   // do not show on menu, only drawer
    },
}

export default tabIndexToPathMap