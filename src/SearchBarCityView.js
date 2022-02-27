import {useState} from "react";
import axios from "axios";
const unsplashKey = 'RaSnBiqog6SVIdgaUHc2Ls-8McGCIPt7S3lsW7M3cgU'
const unsplashUrl = 'https://api.unsplash.com/search/photos'

export const SearchBarCityView = ({updateImgList}) => {
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
            //trim will make spaces elimiated.
            let userInputName = evt.target.value.trim().toLowerCase()
            // call searchCity fun.
            searchCity(userInputName)
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
        }). then (
            res => {console.log(res)
            // let myres = res.data.results
            //     console.log(myres)
            //     same to
            let {data: {results}} = res
                // console.log(results)
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
                    console.log(evt.target.value)
                    setName(evt.target.value)
                }}
                onKeyDown={keyDownHandler}
                type="text"/>
            <h3>{name}</h3>
        </div>
    )
}