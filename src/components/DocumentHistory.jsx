import React from "react";

const DocumentHistory = ({ documents }) => {
  return (
    <div className="bg-white shadow-md rounded-lg px-5 py-1 mt-6">
      <div className="font-semibold text-4xl mb-4 pb-2">Generated Document History</div>
      <div className="space-y-4">
        {documents.length === 0 ? (
          <p>No documents generated yet.</p>
        ) : (
          documents.map((doc, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 bg-gray-50 border border-gray-300 rounded-lg"
            >
              <div>
                <div className="font-medium text-lg">{doc.title}</div>
                <div className="text-sm text-gray-600">{doc.date}</div>
              </div>
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
                onClick={() => window.open(doc.downloadLink, "_blank")}
              >
                Download
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DocumentHistory;
