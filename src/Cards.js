import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
import pic9 from "./images/img-9.jpg";
import pic2 from "./images/img-2.jpg";
import pic8 from "./images/img-8.jpg";

function Cards() {
    return (
        <div className='cards'>
            <h1>Disney/Pixar movie favs:</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={pic9}
                            text="1: Coco. Mystery, Music, Marvelous."
                            label='☆☆☆☆☆'
                            path='/projects'
                        />
                        <CardItem
                            src={pic2}
                            text="2: Zootopia. Really good."
                            label='☆☆☆☆☆'
                            path='/projects'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src={pic8}
                        text="3. Big Hero 6. Fantastic. Showstopping."
                            label='☆☆☆☆☆'
                        path='/projects'
                        />
                        <CardItem
                            src={pic8}
                            text="4: Soul. Deep stuff."
                            label='☆☆☆☆'
                            path='/projects'
                        />
                        <CardItem
                            src={pic8}
                            text="-50: Inside Out. Kinda hate it."
                            label='-'
                            path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
