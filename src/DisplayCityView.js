import './DisplayCityView.scss'

export const DisplayCityView = ({/*name,conversion*/imgList,updateIndex}) => {
    return (
        <div className='display-city-view-container'
            /*style={{border: 'red 2px solid',width:'400px',height: '200px', backgroundColor: "rgba(255,255,255,0.5)"}}*/>
            {imgList.map((item, index) => <img
                // pass the clicked img index to parent
                onClick={()=>updateIndex(index)}
                // onClick={}
                key = {index}
                src={item.thumb}
                alt=""/>)
            }
            {/*<h3>Display Child</h3>*/}
            {/*<p>{name}</p>*/}
            {/*<button*/}
            {/*    onClick={conversion}*/}
            {/*>CONVERT TO UPPERCASE</button>*/}
        </div>
    )
}

