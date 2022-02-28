import {useEffect, useState} from "react";
import axios from "axios";
const unsplashKey = 'RaSnBiqog6SVIdgaUHc2Ls-8McGCIPt7S3lsW7M3cgU'
const unsplashUrl = 'https://api.unsplash.com/search/photos'

export const SearchBarCityView = ({updateImgList,updateIndex}) => {
    const [inputName, setInputName] = useState('Toronto')

    //1. when the component did mount, call search city once, dependency should be empty.
    //2. when the state (inputName) change, call searchCity
    // deps run the call back fun only when the inputName change.
    // 1+2 effect
    useEffect(() => {searchCity(inputName)}, [inputName])

    const [name,setName] = useState(null)

    //obtain the input value when enter key is pressed.
    const keyDownHandler = evt => {
        // console.log(evt.key)
        if (evt.key === 'Enter') {
            //点击其他图片，index归零
            updateIndex(0)
            //trim will make spaces eliminated.
            //选上when enter clicked (useref)
            //js syntax is applicable in react.
            document.getElementById("myInput").select()
            let userInputName = evt.target.value.trim().toLowerCase()
            // call searchCity fun.
            // searchCity(userInputName)
            // 处理好的数值，传到setInputName
            setInputName(userInputName)
        }
    }

    //define searchCity function
    const searchCity = inputCity => {
        // console.log(inputCity)
        //axios
        // https://api.unsplash.com/search/photos
        // client_id=${access_key}
// &query=${searchCity}
// &orientation=landscape`
        axios.get(unsplashUrl, {
            params:{
                query: inputCity,
                orientation:'landscape',
                page: '1'
            },
            headers:{
                Authorization: `Client-ID ${unsplashKey}`
            }
        }).then (
            res => {
                // console.log(res)
            // let myres = res.data.results
            //     console.log(myres)
            //     same to
            let {data: {results}} = res
                //reorg the data structure
                //[{des: ''}, {regular: ''}, {thumb:''} ...]
                // console.log(results)
                // map new object: if expression return object () must add
                let newRes = results.map(item => ({
                    des: item.alt_description,
                    regular: item.urls.regular,
                    thumb: item.urls.thumb
                })
                )
                console.log(newRes)
                //fill out dad's image list
                // updateImgList(results)
                updateImgList(newRes)
            }
        ). catch(err => console.log(err))
    }

    return (
        <div style={{border: '2px solid blue', width:'400px', height: '200px', backgroundColor: 'rgba(255,255,255,0.5'}}>
            <label htmlFor="">Please input name: </label>
            <input
                id = 'myInput'
                onChange={evt => {
                    // console.log(evt.target.value)
                    setName(evt.target.value)
                }}
                onKeyDown={keyDownHandler}
                type="text"/>
            <h3>{name}</h3>
        </div>
    )
}