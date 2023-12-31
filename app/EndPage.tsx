import Image from 'next/image';

function EndPage(){
    return(
        <div className="flex-col flex mx-auto items-center justify-center">
            <Image src="/family-photo.png" alt="Family Photo" width={700} height={500} />
            <br/>
            <h1 className='text-white'>We Love YOU
                <br/> Happy Birthday Dad
            </h1>
            <video controls>
                <source src="/BIRTHDAYCHUNE.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Image
                src='/smiles.jpg'
                width={500}
                height={500}
                alt="smiles"></Image>
        </div>
    )
}

export default EndPage;
