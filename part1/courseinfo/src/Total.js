const Total = (props) => {
    let exercises = props.parts.map(prop => prop.exercises)
    let count = exercises.reduce((count, curr) => count + curr);

    return(<p>Number of exercises {count}</p>);
}

export default Total;