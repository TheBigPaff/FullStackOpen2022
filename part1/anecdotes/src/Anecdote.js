const Anecdote = (props) => {
    return <>
        <p>{props.anecdote}</p>
        <p>Has {props.votes} votes</p>
      </>
}

export default Anecdote