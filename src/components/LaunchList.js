import { useContext } from 'react';
import { LaunchesCtx } from '../context/Context';
import Launch from './Launch';

const LaunchList = () => {
  const { launchesList } = useContext(LaunchesCtx);
  return (
    <div className='launch-items'>
      { launchesList.map((launch, idx) => ( <Launch key={idx} launch={launch}/> )) }
    </div>
  )
}

export default LaunchList