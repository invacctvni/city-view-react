import {useState} from "react";
import axios from "axios";
const unsplashKey = 'RaSnBiqog6SVIdgaUHc2Ls-8McGCIPt7S3lsW7M3cgU'
const unsplashUrl = 'https://api.unsplash.com/search/photos'

export const SearchBarCityView = ({updateName, updateImgList}) => {
    // 2015 new feature
    // let myObj = {
    //     name: 'JT',
    //     age: 24
    // }
    // let name =  myObj.name
    // is same to
    //  let {name} = myObj
    const [name,setName] = useState(null)

    //obtain the input value when enter key is pressed.
    const keyDownHandler = evt => {
        // console.log(evt.key)
        if (evt.key === 'Enter') {
            //trim will make spaces eliminated.
            let userInputName = evt.target.value.trim().toLowerCase()
            // call searchCity fun.
            searchCity(userInputName)
        }
    }

    //define searchCity function
    const searchCity = inputCity => {
        // console.log(inputCity)
        // fetch 3 ways 1. xml request 2. fetch url return 3. axios (3rd party package)
        //axios: https://www.npmjs.com/package/axios
        // https://api.unsplash.com/search/photos
        // client_id=${access_key}
// &query=${searchCity}
// &orientation=landscape`
        //查
        axios.get(unsplashUrl, {
            params:{
                query: inputCity,
                orientation:'landscape',
                page: '1'
            },
            //就是这么规定，就是这么写的，不要问为什么。。。
            headers:{
                Authorization: `Client-ID ${unsplashKey}`
            }
            // 返回了之后怎么办
        }). then (
            res => {console.log(res)
            let results = res.data.results
                console.log(results)
            //     same to
            // let {data: {results}} = res
            //      console.log(results)
                //fill out dad's image list
                updateImgList(results)
            }
        ). catch(err => console.log(err))
    }

    return (
        <div style={{border: '2px solid blue', width:'400px', height: '200px'}}>
            <label htmlFor="">Please input name: </label>
            <input
                onChange={evt => {
                    // console.log(evt.target.value)
                    updateName(evt.target.value)
                    setName(evt.target.value)
                }}
                //when keyboard is pressed.
                onKeyDown={keyDownHandler}
                type="text"/>
            <h3>Input child</h3>
            <p>{name}</p>
        </div>
    )
}