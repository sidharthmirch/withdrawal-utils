const Results = ({inputValues, results, setResults}) => {
    
    const onPress = (inputValues) => {
        setResults((previous) => {
            let arr = [...previous]
            let threshold = inputValues[0]
            let mined = inputValues[1]
            let daily = inputValues[2]
            
            let remaining = threshold - mined
            let time;
            if (mined > threshold) {
                remaining = `0 BTC`
                time = 'You can already withdraw! 🥳'
            } else {
                time = `${Math.ceil(remaining/daily)} days until withdrawal`;
            }
            let monthly = `${Number(daily * 30.436875).toFixed(8)} BTC`;

            arr[0] = remaining
            arr[1] = time
            arr[2] = monthly

            return arr;
        })
    }

    return (
        <>
            <div className="row">
                Amount left to mine: {results[0]}
            </div>
            <div className="row">
                Estimated time until next withdraw: {results[1]}
            </div>
            <div className="row">
                Estimated monthly revenue: {results[2]}
                <br /><br />
                <button className="button" onClick={() => {onPress(inputValues)}}>compute</button>
            </div>
        </>
    )
}

export default Results
