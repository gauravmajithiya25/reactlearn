import Profile from "./PropsChild";

function PropsParent() {
    return (
        <>
            <br />
            <h2>Main Component</h2>

            <Profile
                name="Gaurav"
                age={30}
                role="Full Stack Developer"
            />
        </ >
    );
}

export default PropsParent;