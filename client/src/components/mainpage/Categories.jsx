import React from 'react';


const Categories = () => {
    const data = [
        { 
            cateImg: 'https://i.ibb.co/7vDLJFb/burger.png',
            cateName:"QT Bar"   
        },
        { 
            cateImg: 'https://i.ibb.co/7vDLJFb/burger.png',
            cateName:"Box Bar"   
        },
        { 
            cateImg: 'https://i.ibb.co/7vDLJFb/burger.png',
            cateName:"Pipe"   
        },
        { 
            cateImg: 'https://i.ibb.co/7vDLJFb/burger.png',
            cateName:"Plane Bar"   
        },
        { 
            cateImg: 'https://i.ibb.co/7vDLJFb/burger.png',
            cateName:"Flat Bar"   
        },
        { 
            cateImg: 'https://i.ibb.co/7vDLJFb/burger.png',
            cateName:"Shapt Bar"   
        }
    ]  
  return (
    <>
        <div className='category'>
            {data.map((value,index) =>{
                return(
                    <div className='box f_flex' key={index}>                        
                        <span>{value.cateName}</span>
                    </div>
                )
            })}
        </div>
    </>
  );
}

export default Categories;
