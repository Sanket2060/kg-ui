// import React, { useEffect, useRef, useState } from 'react';
// import { Document, Page } from 'react-pdf';

// function PdfComp({ pdfFile, iframeRef }) {
//   const [numPages, setNumPages] = useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   useEffect(() => {
//     if (iframeRef.current && pdfFile) {
//       iframeRef.current.src = pdfFile;
//     }
//   }, [pdfFile]);

//   return (
//     <div className="flex">
//       <div className="w-80 h-[30rem] mr-8">
//         <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
//           {Array.from(new Array(numPages), (el, index) => (
//             <Page
//               key={`page_${index + 1}`}
//               pageNumber={index + 1}
//               renderTextLayer={false}
//               renderAnnotationLayer={false}
//             />
//           ))}
//         </Document>
//       </div>
//       <iframe ref={iframeRef} style={{ display: 'none' }} title="pdfIframe" />
//     </div>
//   );
// }

// export default PdfComp;
import React, { useEffect } from "react";
import { Document, Page } from "react-pdf";

function PdfComp({ pdfFile }) {
  const [numPages, setNumPages] = React.useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-80 h-[30rem] mr-8">
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
    </div>
  );
}

export default PdfComp;
