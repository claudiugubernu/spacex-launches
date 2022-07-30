import { createContext, useState, useEffect } from "react";

export const LaunchesCtx = createContext(null);

const Context = ({ children }) => {

    const [launchesList, setLaunchesList] = useState([]);
    const [yearSelectActive, setYearSelectActive] = useState(false);
    const [yearList, setYearList] = useState([]);

    const getLaunchList = async () => {
        const requestUrl = "https://api.spacexdata.com/v3/launches";
        const response = await fetch(requestUrl);
        const launchesData = await response.json();
        setLaunchesList(launchesData);
    }

    useEffect(() => { 
        getLaunchList();
    }, []);

    const onGetLaunchList = async () => {
        setLaunchesList([]);
        getLaunchList();
    }

    const onSortByDescending = () => {
        setLaunchesList([...launchesList].reverse());
    }

    const onSelectedYear = () => {
        setYearSelectActive(!yearSelectActive);
        setYearList(launchesList.map((launch) => launch.launch_date_local));
    }

    const onYearSelect = (e) => {
        const selectedYear = e.target.value;
        setLaunchesList(launchesList.filter(launch => new Date(launch.launch_date_local).toLocaleDateString("en-GB", {
            year: 'numeric'
        }) === selectedYear));
    }

    return <LaunchesCtx.Provider value={{launchesList, onGetLaunchList, onSortByDescending, onSelectedYear, yearSelectActive, yearList, onYearSelect}}>{children}</LaunchesCtx.Provider>
}

export default Context