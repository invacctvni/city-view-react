//Loaing img component.
import loadingImg from '../src/assets/spinning-loading.gif'

export const Loading = () => {
    return <div>
        <img
            style={{width: '100vw', height: '100vh', position: 'fixed', top: '0', left: '0'}}
            src={loadingImg} alt="loading..."/>
    </div>
}

