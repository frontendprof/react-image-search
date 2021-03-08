
import React from 'react'

const ImageList = ({ imgs }) => {
    console.log(imgs);

    const images = imgs.map(({urls,id,description}) => <img src={urls.regular} key={id} alt={description} />)




    return (
        <div>{images}</div>
    )
}

export default ImageList
