const Greeting = ({name}: {name?: string}) => {

    return (
        <h1>Hello {name || "World"}, Welcome to React js</h1>
    )

}

export default Greeting