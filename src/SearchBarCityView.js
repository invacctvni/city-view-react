import {useEffect, useState} from "react";
import axios from "axios";
import {Loading} from "./Loading";
const unsplashKey = 'RaSnBiqog6SVIdgaUHc2Ls-8McGCIPt7S3lsW7M3cgU'
const unsplashUrl = 'https://api.unsplash.com/search/photos'

export const SearchBarCityView = ({updateImgList}) => {
    //define isLoading (true/false) state to control if show <Loading/>
    const [isLoading, setIsLoading] = useState(false)




    //1 when the component did mount, cl search city (once), dependency should be empty.
    //2 when the state (inputName) is changed, call searchCity.
    const [inputName, setInputName] = useState('canadian')
    useEffect(()=> {searchCity(inputName)},[inputName])
    const [name,setName] = useState(null)

    //obtain the input value when enter key is pressed.
    const keyDownHandler = evt => {
        // console.log(evt.key)
        if (evt.key === 'Enter') {
            //Javascript syntax can be used in React. When hit enter, all texts in the input will be selected. The trim will make spaces elimiated.
            document.getElementById('myInput').select()
            let userInputName = evt.target.value.trim().toLowerCase()
            // console.log(userInputName)
            // call searchCity fun.
            // searchCity(userInputName)
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
        setIsLoading(true)
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
                console.log(results)
                //fill out dad's image list
                updateImgList(results)
                //reorganize the data structure.
                //[{{des:'',regular:'',thumb:''}, {}, {}...]
                console.log(results)
                //to expression return, must add ()
            let newRes = results.map((item) => ({
                    des: item.alt_description,
                    regular: item.urls.regular,
                    thumb: item.urls.thumb
            }))
                console.log(newRes)
                updateImgList(newRes)
                setIsLoading(false)
            }
        ). catch(err => {
            setIsLoading(false)
            console.log(err)})
    }

    return (
        <div style={{border: '2px solid blue', width:'400px', height: '200px', backgroundColor: 'rgba(255,255,255,0.5)'}}>
            <label htmlFor="">Please input name: </label>
            <input
                id = "myInput"
                onChange={evt => {
                    // console.log(evt.target.value)
                    // updateName(evt.target.value)
                    setName(evt.target.value)
                }}
                onKeyDown={keyDownHandler}
                type="text"/>
            {/*<h3>Input child</h3>*/}
            <h3>{name}</h3>
            {isLoading && <Loading />}
            {/*<p>{name}</p>*/}
        </div>
    )
}