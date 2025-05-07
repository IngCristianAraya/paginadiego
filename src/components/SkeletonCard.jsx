const SkeletonCard = () => {
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white animate-pulse">
        <div className="h-56 bg-gray-300"></div>
        <div className="p-4 space-y-3">
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="h-10 bg-gray-300 rounded mt-2"></div>
        </div>
      </div>
    );
  };
  
  export default SkeletonCard;