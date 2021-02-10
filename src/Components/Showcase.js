import React from 'react';

function Showcase({selectedMain}){
    return(
        <div className="showcase">
            <div className="main"> 
                <img src ={`/img/banner/${selectedMain}/1.jpg`} alt="showcase" />
            </div>

            <div className="sub1"> 
                <img src ={`/img/banner/${selectedMain}/2.jpg`} alt="showcase" />
            </div>

            <div className="sub2"> 
                <img src ={`/img/banner/${selectedMain}/3.jpg`} alt="showcase" />
            </div>

            <div className="sub3"> 
                <img src ={`/img/banner/${selectedMain}/4.jpg`} alt="showcase" />
            </div>

            <div className="sub4"> 
                <img src ={`/img/banner/${selectedMain}/5.jpg`} alt="showcase" />
            </div>



        </div>
    )
}


export default Showcase;