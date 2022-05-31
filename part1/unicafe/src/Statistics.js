import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
    const { good, neutral, bad } = props
    const all = good + neutral + bad
    return (
        <table>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={all}/>
            <StatisticLine text="average" value={Math.abs(good - bad ) / all}/>
            <StatisticLine text="positive" value={(good / all) * 100 + "%"}/>
        </table>
    );
}

export default Statistics