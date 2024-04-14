import React from 'react'
import * as images from "../assets";
import Button from './Button';

const Ecosystem = () => {
    return (
        <>
          <section className="my-36">
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className='flex flex-col justify-evenly gap-4'>
            <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-semibold lg:leading-[70px]'>Built for developers
                and meme enjoyers</h1>
            <p className="text-dimGrey text-lg md:text-base lg:text-lg xl:text-xl">
                Laika is offering developers a robust and dynamic infrastructure to build, innovate, and scale their projects on the DogeChain. Whether you're developing the next groundbreaking dApp or integrating DOGE into your existing projects, Laika provides the speed, scalability, and security you need.
            </p>
            <Button name="Join the ecosystem" style="w-[57%] md:w-[48%] lg:w-[35%] xl:w-[27%]" />
        </div>
        <div className='flex justify-center items-center'>
            <img className="w-full md:w-auto" src="src/assets/loading.png" alt="" />
        </div>
    </div>
</section>

        </>

    )
}

export default Ecosystem