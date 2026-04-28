const Input = ({value}: {value?: string}) => {

    return (
        <input placeholder="Enter something" value={value?? ""} onChange={() => null} />
    )

}

export default Input