import './DisplayCityView.scss'

export const DisplayCityView = ({imgList, updateIndex}) => {
    return (
        <div className="displayContainer">
            {/*imglist render pic*/}
            {/*Store the src for images in array
            and loop through that array and provide the index value
            as key to the img:*/}
            {imgList.map((item, index)=> <img
                // pass the clicked index to parent
                onClick={()=>updateIndex(index)}
                //avoid warning, add key from 0 - 9 in index to separate.
                key = {index}
                src={item.thumb}
             alt=""/>)
            }
        </div>
    )
}

