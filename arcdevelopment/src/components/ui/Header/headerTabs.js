

/**
 * Toolbar Tab names, associated paths (links), and labels.
 */
const tabIndexToPathMap = {
    0: {
        path: "/"
    },
    1: {
        path: "/services",
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
    },
    3: {
        path: "/about",
    },
    4: {
        path: "/contact",
    },
}

export default tabIndexToPathMap