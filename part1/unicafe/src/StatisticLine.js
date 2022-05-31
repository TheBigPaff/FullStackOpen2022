const StatisticLine = (props) => {
    return (
        <tr>
            <th>{props.text}</th>
            <th>{props.value}</th>
        </tr>
    );
}

export default StatisticLine