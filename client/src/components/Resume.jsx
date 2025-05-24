import { Document, Page, pdfjs } from 'react-pdf';
import { DownloadIcon } from '@heroicons/react/24/outline';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-cyan-400">My Resume</h2>
        <a 
          href="/resume.pdf" 
          download
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors"
        >
          <DownloadIcon className="h-5 w-5" />
          Download PDF
        </a>
      </div>
      
      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
        <Document
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="text-center py-8">Loading resume...</div>}
        >
          <Page 
            pageNumber={pageNumber} 
            width={800}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
        
        <div className="flex justify-center mt-4 text-sm text-gray-400">
          Page {pageNumber} of {numPages}
        </div>
      </div>
    </div>
  );
}