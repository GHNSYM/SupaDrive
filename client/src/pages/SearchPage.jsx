import React from 'react';
import SearchComponent from '../components/SearchComponent';

export default function SearchPage() {
  return (
    <div className="pt-20 text-white px-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">AI-Powered Smart Search</h1>

      {/* Search Component */}
      <div className="mt-10">
        <SearchComponent />
      </div>
      {/* Description */}
      <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-6 mt-10">
        Use our advanced AI search to instantly find your files. Just type in keywords, file names, or even descriptions, and our intelligent search engine will fetch the most relevant results in seconds.
      </p>
    </div>
  );
}
