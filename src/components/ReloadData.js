import { useContext } from 'react';
import { LaunchesCtx } from '../context/Context';
import icon from "../assets/icon/refresh.png";

const ReloadDataButton = () => {
    const { onGetLaunchList } = useContext(LaunchesCtx);

    return (
        <button className="primary-btn reload-btn" onClick={onGetLaunchList}>Reload Data
            <img src={icon} className="refresh-icon icon" alt="Refresh icon"/>
        </button>
    )
}

export default ReloadDataButton