import Image from 'next/image';
function Cover() {
    return (
      <div className="flex mx-auto items-center justify-center">
        <div className='bg-transparent text-white'>
          {/* University Logo or Symbol */}
          {/* Card Title */}
          <h1 className=" my-40 bg-black text-7xl font-bold text-shadow text-center">Happy Birthday Dad!</h1>
          <h1 className='font-bold text-shadow text-center'> A digital card for you on this specal day<br/> I hope you enjoy it!</h1>
        </div>
      </div>
    );
  }
  
  export default Cover;