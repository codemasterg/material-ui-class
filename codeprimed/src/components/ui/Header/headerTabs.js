/**
 * Toolbar Tab names, associated paths (links), and labels.
 */
const tabIndexToPathMap = {
    0: {
        path: "/",
        label: "Home",
    },
    1: {
        path: "/experience",
        label: "My Experience",
        submenuItems: [
            {
                path: "/experience#architecturePanel",
                label: "Architecture and Design"
            },
            {
                path: "/experience#programmingPanel",
                label: "Programming Languages"
            },
            {
                path: "/experience#softwarePanel",
                label: "Software Frameworks"
            },
            {
                path: "/experience#webservicePanel",
                label: "Web Services"
            },
            {
                path: "/experience#databasePanel",
                label: "Databases"
            },            
        ]
    },
    2: {
        path: "/resume",
        label: "Resume",
    },
    3: {
        path: "/about",
        label: "About",
    },
    4: {
        path: "/contact",
        label: "Contact",
    },
}

export default tabIndexToPathMap