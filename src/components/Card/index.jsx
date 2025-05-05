import Data from '../../Data/Data.json';
//import { useState } from 'react';

function Card() {
    // const [data, setData] = useState(Data);
    return (
        <body>
            <div className='card-container'>
                {Data.map((item) => (
                    <article key={item.id} className='card'>
                        <img src={item.cover} alt={item.title} className='card-image' />
                        <h2 className='card-title'>{item.title}</h2>
                    </article>
                ))}
            </div>
        </body>
    );
}

export default Card;