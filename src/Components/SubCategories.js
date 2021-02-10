import React from 'react';




function SubCategories({setSelectedSub, selectedMain}){

    const handleChange=(category)=>{
        setSelectedSub(category);
    }

    return(
        <div className="sub">
            <label>Choose Category:</label>
            <select name="subCategory" id="subCategory" onChange={() => handleChange(document.getElementById("subCategory").value)}>
                {selectedMain === 'underwear' &&
                <>
                <option value="briefs">Brief</option>
                <option value="bra">Bra</option>
                </>}

                {selectedMain === 'Female' &&
                <>
                <option value="tshirt">Tees</option>
                <option value="bags">Bags</option> </>}

                {selectedMain === 'Male' &&
                <>
                <option value="tshirt">Tees</option>
                <option value="bags">Bags</option> </>}

                {selectedMain === 'bodybath' &&
                <>
                <option value="towel">Towels</option>
                <option value="fragrance">Fragrance</option> </>}

               
           
            </select>
        </div>
    )
   

}



export default SubCategories;
