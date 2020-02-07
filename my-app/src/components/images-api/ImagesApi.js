import React from 'react';
import axios from 'axios';


export const ImagesApi = (prop) => {
    const BASE_URL=`https://pixabay.com/api/?q=${prop}&page=1&key=15160728-4da4dca327a38e5f428939f00&image_type=photo&orientation=horizontal&per_page=12`;

    axios.get(BASE_URL+prop)
}
export default ImagesApi;