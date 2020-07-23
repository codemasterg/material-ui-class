import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';

import { Document, Page } from "react-pdf/dist/entry.webpack";

import { getTabIndexFromPath } from '../Header/headerTabs';
import resumeStyles from './resumeStyles';
/**
 * Using https://www.npmjs.com/package/react-pdf to display the PDF:
 * 
 * npm install react-pdf --save
 * 
 * @param {*} props 
 */

const Resume = (props) => {
    const classes = resumeStyles();
    const tabIndex = getTabIndexFromPath();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        props.setTabIndex(tabIndex);  // ensure tab for this component is highlighted
    }, [tabIndex, props]);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(pageNumber);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    function firstPage() {
        setPageNumber(1);
    }

    function download() {
        window.open('https://master.d162hchzdrk4o4.amplifyapp.com:3000/resume.pdf');
    }

    return (
        // TODO - this is ok for local dev, but need to:
        // 1. Serve up resume from a server (the example here just provides it via npm /public static content)
        // 2. Want to package UI and web services backend into single Spring Boot app jar so all can run in embedded tomcat
        // and not have separate nodjs running. See article: https://medium.com/@mukundmadhav/build-and-deploy-react-app-with-spring-boot-and-mysql-6f888eb0c600 
        <Box className={classes.box} borderColor="primary.light" border={1}>
            <Document file={{ url: "https://master.d162hchzdrk4o4.amplifyapp.com:3000/resume.pdf" }} onLoadSuccess={onDocumentLoadSuccess} >
                <Page pageNumber={pageNumber} width={800} />
            </Document>
            <div>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}>
                    Previous
                </button>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}>
                    Next
                </button>
                <button
                    type="button"
                    onClick={firstPage}>
                    First
                </button>
                <button
                    type="button"
                    onClick={download}>
                    Print
                </button>
            </div>

        </Box>

    );

}
export default Resume;
