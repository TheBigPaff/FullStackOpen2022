const Persons = (props) => (
    <div>
        {props.persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
)

export default Persons