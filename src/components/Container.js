import { useState } from 'react';
import Input from './Input';
import Results from './Results';

const Container = () => {

    const [inputValues, setInputValues] = useState([0.001, 0.001, 0.0001])
    const [results, setResults] = useState([
        'Press compute',
        '',
        ''
    ])

    return (
        <div className="container">
                <div className="input">
                    <Input label="Withdrawal Threshold" placeholder={0.01} index={0} value={inputValues[0]} setInputValues={setInputValues} />
                </div>
                <div className="input">
                    <Input label="Amount Mined" placeholder={0.00} index={1} value={inputValues[1]} setInputValues={setInputValues} />
                </div>
                <div className="input">
                    <Input label="Estimated Daily Minage" placeholder={0.00} index={2} value={inputValues[2]} setInputValues={setInputValues} />
                </div>
                <Results results={results} inputValues={inputValues} setResults={setResults} />
        </div>
    )
}

export default Container
