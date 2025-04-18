

function Resume() {
  return (
    <div
      className="max-w-6xl mx-auto relative p-6"
    >
      <div className="absolute inset-0 pointer-events-none rounded-2xl" />
      
      <div className="flex justify-between items-center mb-2 px-6 relative">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 section-heading pt-4 section-heading pt-4">Resume</h1>
        <a
          href="/Hemant-Resume.pdf"
          download
          className="flex items-center gap-2  bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
         Download
        </a>
      </div>
      
      <div
        className="bg-[#0a1628]/50 backdrop-blur-sm p-4 rounded-lg border border-teal-900/50"
      >
        <object
          data="/Hemant-Resume.pdf"
          type="application/pdf"
          className="w-full h-[1200px] rounded-xl"
          aria-label="Resume Preview"
        >
          <p>Your browser does not support PDFs. Please download the PDF to view it: <a href="/Hemant-Resume.pdf">Download PDF</a>.</p>
        </object>
      </div>
    </div>
  );
}

export default Resume;
