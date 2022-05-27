import Part from './Part';

const Content = (props) => {
    console.log(props)
    var values = props.parts.map(value => (
        <Part part={value.name} exercise={value.exercises}/>
    ));

    return(<>{values}</>);
};

export default Content;