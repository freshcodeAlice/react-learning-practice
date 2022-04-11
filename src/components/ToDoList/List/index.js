import './style.css';


function List (props) {

    const liArray = props.toDoArray.map( (element, index) => {
        return <li key={Math.floor(index+Math.random()*100)}>{element}</li>
    })



    return (
        <ul>
            {liArray}
        </ul>
    );
}

export default List;
