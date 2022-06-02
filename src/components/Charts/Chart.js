import './Chart.css';
import ChartBar from './ChartBar.js';
const Chart = (props) => {

    return (
        <div className="chart">
            {props.dataPoint.map((dataPoint,index)=>(
                <ChartBar key={index}
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );

}
export default Chart