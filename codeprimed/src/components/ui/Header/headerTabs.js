/**
 * Toolbar Tab names, associated paths (links), and labels.
 */
const tabIndexToPathMap = {
    0: {
        path: "/",
        label: "Home",
    },
    1: {
        path: "/skills",
        label: "Skills Summary",
        submenuItems: [
            {
                path: "/skills#architecturePanel",
                label: "Architecture and Design"
            },
            {
                path: "/skills#programmingPanel",
                label: "Programming Languages"
            },
            {
                path: "/skills#softwarePanel",
                label: "Software Frameworks"
            },
            {
                path: "/skills#webservicePanel",
                label: "Web Services"
            },
            {
                path: "/skills#databasePanel",
                label: "Databases"
            },            
        ]
    },
    2: {
        path: "/experience",
        label: "Experience",
        submenuItems: [
            {
                path: "/experience#0to5",
                label: "Past 5 Years"
            },
            {
                path: "/experience#5to15",
                label: "Past 5 to 15 Years"
            },
            {
                path: "/experience#15toBeginning",
                label: "Past 15 to Beginning"
            },
            {
                path: "/experience#trainingAndEducation",
                label: "Training and Education"
            },
        ]
    },
    3: {
        path: "/resume",
        label: "Resume",
    },
    4: {
        path: "/about",
        label: "About",
    },
    5: {
        path: "/contact",
        label: "Contact",
    },
}

export default tabIndexToPathMap