import './Chart.css';
import ChartBar from './ChartBar.js';
const Chart = (props) => {

    const dataPointsValue = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);
    return (
        <div className="chart">
            {props.dataPoint.map((dataPoint, index) => (
                <ChartBar key={index}
                          value={dataPoint.value}
                          maxValue={totalMaximum}
                          label={dataPoint.label}
                />
            ))}
        </div>
    );

}
export default Chart