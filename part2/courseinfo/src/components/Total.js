const Total = ({parts}) => {
    let exercises = parts.map(prop => prop.exercises)
    let count = exercises.reduce((count, curr) => count + curr);

    return(<b>Number of exercises {count}</b>);
}

export default Total;