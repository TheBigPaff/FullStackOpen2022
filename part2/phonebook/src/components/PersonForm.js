const PersonForm = (props) => (
    <form onSubmit={props.addName}>
        <div>
          name: <input onChange={event => props.setName(event.target.value)} value={props.name}/>
        </div>
        <div>
          number: <input onChange={event => props.setNumber(event.target.value)} value={props.number}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
)

export default PersonForm