import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    //const handleAdd = () => {
    //    setCategories([...categories, 'Naruto']);
    //}

    return (  
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category} 
                            category={category}
                        />
                    ))
                }
                
            </ol>
        </>
    );
}
 
export default GitExpertApp;