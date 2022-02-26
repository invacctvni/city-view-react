// paste from searchbar
export const Display = ({name,conversion}) => {
    return (
        <div style={{border: 'red 2px solid',width:'400px',height: '200px'}}>
            <h3>Display Child</h3>
            <p>{name}</p>
            <button
            // 直接调用这个conversion???
            onClick={conversion}
            >CONVERT TO UPPERCASE</button>
        </div>
    )
}

// let car = {
//     name : 'ford',
//     mileage: 130000,
//     function horn () {
//         this.name
// }
// this 尽量避开用吧