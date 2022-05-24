import Part from './Part';

const Content = (props) => {
    var values = props.exercises.map((value, i) => (
    <Part part={i < props.parts.length ? props.parts[i] : ""} exercise={value}/>
    ));

    return(<>{values}</>);
};

export default Content;