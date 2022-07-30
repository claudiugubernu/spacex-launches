import { useContext } from "react";
import { LaunchesCtx } from "../context/Context";
import HeroImage from "./HeroImage"

const LoadingScreen = () => {
    const { launchesList } = useContext(LaunchesCtx);
    
    return (
        <div className={launchesList.length <= 0 ? 'loading-screen active' : 'loading-screen'}>
            <HeroImage />
            <div className='loading-txt'>
                <div>
                    <div className="letter_container_1">
                        <span>L</span>
                    </div>
                    <div className="letter_container_2">
                        <span>O</span>
                    </div>
                    <div className="letter_container_3">
                        <span>A</span>
                    </div>
                    <div className="letter_container_4">
                        <span>D</span>
                    </div>
                    <div className="letter_container_5">
                        <span>I</span>
                    </div>
                    <div className="letter_container_6">
                        <span>N</span>
                    </div>
                    <div className="letter_container_7">
                        <span>G</span>
                    </div>
                    <div className="letter_container_8">
                        <span>.</span>
                    </div>
                    <div className="letter_container_9">
                        <span>.</span>
                    </div>
                    <div className="letter_container_10">
                        <span>.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen