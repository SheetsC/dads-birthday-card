import Image from 'next/image';
function Cover() {
    return (
      <div className="flex items-center justify-center bg-gray-200 text-blue-700">
        <div>
          {/* University Logo or Symbol */}
          <Image src="/family-photo.png" alt="Family Photo" width={500} height={500} />
          {/* Card Title */}
          <h1 className="text-2xl font-bold text-center">Happy Birthday Dad!</h1>
        </div>
      </div>
    );
  }
  
  export default Cover;