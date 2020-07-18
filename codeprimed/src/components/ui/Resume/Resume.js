import React from 'react';

import { Document, Page } from "react-pdf/dist/entry.webpack";

/**
 * Using https://www.npmjs.com/package/react-pdf to display the PDF:
 * 
 * npm install react-pdf --save
 * 
 * @param {*} props 
 */
const Resume = (props) => {
    
    return(
        // TODO - this is ok for local dev, but need to:
        // 1. Serve up resume from a server (the example here just provides it via npm /public static content)
        // 2. Want to package UI and web services backend into single Spring Boot app jar so all can run in embedded tomcat
        // and not have separate nodjs running. See article: https://medium.com/@mukundmadhav/build-and-deploy-react-app-with-spring-boot-and-mysql-6f888eb0c600 
        <Document file={ {url: "http://192.168.1.24:3000/resume.pdf"} }  > 
            <Page pageNumber={1} width={800} />
        </Document>
    );
    
}
export default Resume;
