import "./Calendar.css"
import DataCard from "./DateCard"

function Calendar ({Date}) {
    const startDate = 2;

    return <div>
        <ul className="calendar-list">
            <li className="calendar-day" style={{color:"red"}}>SUN</li>
            <li className="calendar-day">MON</li>
            <li className="calendar-day">TUE</li>
            <li className="calendar-day">WED</li>
            <li className="calendar-day">THU</li>
            <li className="calendar-day">FRI</li>
            <li className="calendar-day" style={{color:"blue"}}>SAT</li>
            {[...Array(startDate)].map((_, i) => <li key={i}></li>)}
            {Date.map((v, i) =><DataCard key={i} date={v} startDate={startDate} />)}
        </ul>
    </div>;
}

export default Calendar;