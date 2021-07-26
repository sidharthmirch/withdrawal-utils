const Input = ({label, index, inputValues, setInputValues, placeholder}) => {
    
    const onInput = (event, index) => {
        setInputValues((previous) => {
            let arr = [...previous];
            let value = parseFloat(event.target.value);
            arr[index] = value;
            return arr;
        })
    }

    return ( 
        <>
            <label>{label}: </label>
            <input value={inputValues} placeholder={placeholder} onChange={(event) => {onInput(event, index)}} />
        </>
    )
}

export default Input
