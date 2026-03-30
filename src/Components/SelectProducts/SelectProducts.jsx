import React, { use } from 'react';
import Tools from '../Tools/Tools';

const SelectProducts = ({toolsPromis}) => {
    const toolsData = use(toolsPromis)
    //console.log(toolsData)
    return (
        <div className='px-50 py-30'>
            <div className=' flex flex-col text-center space-y-4'>
                <h1 className='font-bold text-[48px] text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-[#627383]'>Choose from our curated collection of premium digital products designed <br/>
                to boost your productivity and creativity.</p>
                <div className='flex justify-center '>
                    <button className='btn text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Products</button>
                    <button className='btn rounded-full'>Cart(0)</button>
                </div>
                <div className='border-2 border-gray-100 rounded-3xl p-2 h-auto'>
                    <Tools toolsData ={toolsData}></Tools>
                </div>
            </div>

        </div>
    );
};

export default SelectProducts;