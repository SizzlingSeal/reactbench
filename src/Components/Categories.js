import React from 'react'

function Categories({setSelectedMain ,setSelectedSub}){

    const handleClick=(category)=>{
        setSelectedMain(category);
        if(category === 'Male' || 'Female'){
            setSelectedSub('tshirt');
        }
        if(category === 'underwear'){
            setSelectedSub('briefs');
        }
        if(category === 'bodybath'){
            setSelectedSub('towel');
        }
        
    }
    return(
        <div className="categories">
            <a href='#target1' id='target1' className='target' onClick={() => handleClick("Male")}>Men</a>
            <a href='#target2' id='target2' className='target' onClick={() => handleClick("Female")}>Women</a>
            <a href='#target3' id='target3' className='target' onClick={() => handleClick("underwear")}>Underwear</a>
            <a href='#target4' id='target4' className='target' onClick={() => handleClick("bodybath")}>Body And Bath</a>
        </div>
    )
}



export default Categories;