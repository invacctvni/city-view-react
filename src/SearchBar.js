import {useState} from "react";

export const SearchBar = ({updateName}) => {
    // 2015 new feature
    // let myObj = {
    //     name: 'JT',
    //     age: 24
    // }
    // let name =  myObj.name
    // is same to
    //  let {name} = myObj
    const [name,setName] = useState(null)

    return (
        <div style={{border: '2px solid blue', width:'400px', height: '200px'}}>
            <label htmlFor="">Please input name: </label>
            <input
                onChange={evt => {
                    console.log(evt.target.value)
                    updateName(evt.target.value)
                    setName(evt.target.value)
                }}
                type="text"/>
            <h3>Input child</h3>
            <p>{name}</p>
        </div>
    )
}