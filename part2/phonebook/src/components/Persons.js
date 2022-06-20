import Person from "./Person"

const Persons = (props) => (
    <div>
        {props.persons.map(person => <Person key={person.id} person={person} deletePerson={props.deletePerson}/>)}
    </div>
)

export default Persons