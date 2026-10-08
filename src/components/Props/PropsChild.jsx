function PropsChild(props) {
    return (
        <div>
            <h2>PropsChild Component</h2>

            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Role: {props.role}</p>
        </div>
    );
}

export default PropsChild;