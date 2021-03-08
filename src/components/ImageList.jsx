
import React from 'react'
import ImageCard from './ImageCard'

const ImageList = (props) => {
    

    const imgs = props.images.map((image)=>{
        return <ImageCard key={image.id} image={image}/>
    })




    return (
        <div className="img-list">{imgs}</div>
    )
}

export default ImageList
