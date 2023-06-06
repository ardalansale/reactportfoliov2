// import React, {useState} from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import myResume from '../assets/pdf/myResume.pdf';
// const Resume = () => {
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//         setPageNumber(1);
//       }



//   return (
//         <div className="resume">
//             <Document
//         file={myResume}
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page height="600" pageNumber={pageNumber} />
//       </Document>
//       <p>Page {pageNumber} of {numPages}</p>

//         </div>

// );
// };

// export default Resume;
