import { useContext } from "react";
import {LaunchesCtx} from '../context/Context';
import iconSort from "../assets/icon/sort.png";
import iconYear from "../assets/icon/select.png";
import { Container } from "react-bootstrap";

const FilterBar = () => {
    const {onSortByDescending, onSelectedYear, yearSelectActive, yearList, onYearSelect} = useContext(LaunchesCtx);
    // Get first unique value from array
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const uniqueYear = yearList.map((year) => new Date(year).toLocaleDateString("en-GB", {
        year: 'numeric'
    })).filter(unique);

    return (
        <Container fluid className="filter-bar">
            <div className='year-wrapper'>
                <button className="primary-btn" onClick={onSelectedYear}>Filter By Year
                    <img src={iconYear} className={yearSelectActive ? 'sort-icon icon active' : 'sort-icon icon'} alt="Sort icon"/>
                </button>
                <div className={yearSelectActive ? 'year-options active' : 'year-options'}>
                    { uniqueYear.map((year, idx) => ( 
                        <input type='text' key={idx} value={year} onClick={onYearSelect} readOnly/>
                    ))}
                </div>
            </div>
            <button className="primary-btn" onClick={onSortByDescending}>Sort Descending
                <img src={iconSort} className="sort-icon icon" alt="Sort icon"/>
            </button>
        </Container>
    )
}

export default FilterBar