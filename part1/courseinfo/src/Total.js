const Total = (props) => {
    let count = props.exercises.reduce((count, curr) => count + curr);

    return(<p>Number of exercises {count}</p>);
}

export default Total;