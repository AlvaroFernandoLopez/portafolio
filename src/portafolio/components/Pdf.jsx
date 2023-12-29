


import { useState } from 'react';
import { Document, Page } from 'react-pdf';


export const  Pdf=()=> {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess=({ numPages })=>{
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="./PDF.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}