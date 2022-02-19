// CityView Project using React (useeffect, usestate)

import {Display} from "./Display";
import {useState} from "react";
import {SearchBar} from "./SearchBar";
import './App.css';
import {SearchBarCityView} from "./SearchBarCityView";
import {DisplayCityView} from "./DisplayCityView";

function App() {
    const [name, setName] = useState(null)

    //create a state to store the results by child.

    const [imgList, setImgList] = useState([])
    const updateImgList = (value) => {
        setImgList(value)
    }

    //create a function to accept the value from child and set state(setName)
    const updateName = (value) => {
        // console.log(value)
        setName(value)
    }

    const conversion = () => {
        setName(name => name.toUpperCase())
    }

    return (
        <div className="App">
            <h1>Parent:</h1>
            <p>{name}</p>
            {/*<p>{JSON.stringify(imgList)}</p>*/}
            {/*<SearchBar updateName = {updateName}/>*/}
            <SearchBarCityView updateName = {updateName}
                               updateImgList = {updateImgList}
            />
            <hr/>
            <hr/>
            {/*<Display name = {name}*/}
            {/*         //传进去*/}
            {/*         conversion = {conversion}*/}
            {/*/>*/}
            <DisplayCityView name = {name}
                     //传进去
                     conversion = {conversion}
            />
            {/*if array length is not zero get the second*/}
            {imgList.length !==0 && <img
                style={{height:'100vh',
                        width: '100vw',
                        position: 'absolute',
                        zIndex: -1
                }}
                src={imgList[0].urls.regular} alt=""/>}
            {/*if imgList is an object, use !!imgList instead of imgList.length !==0 to ensure the object is not empty. */}
        </div>
    );
}
export default App;