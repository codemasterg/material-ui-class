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
                path: "/design",
                label: "Architecture and Design"
            },
            {
                path: "/languages",
                label: "Programming Languages"
            },
            {
                path: "/frameworks",
                label: "Software Frameworks"
            },
            {
                path: "/webservices",
                label: "Web Services"
            },
            {
                path: "/databases",
                label: "Databases"
            },            
        ]
    },
    2: {
        path: "/projects",
        label: "Projects",
    },
    3: {
        path: "/about",
        label: "About Me",
    },
    4: {
        path: "/contact",
        label: "Contact",
    },
}

export default tabIndexToPathMap