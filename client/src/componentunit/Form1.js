import React, {useState} from 'react';
import Controls from './Controls';

const Form = () => {
    // Data
    const controlName = {
        from: "From",
        to: "To"
    }

    const options = [
        // "Millimetres",
        // "Centimetres",
        // "Decimetres",
        // "Metres",
        'marla',//"Hectometres",
        'sq feet',//"Decametres",
        // 'kanal'//"Kilometres"
    ]

    const units = [
    //    1, // 1000,
    //    250, // 100,
    //    10, // 10,
        // 1,// 1,
        1,//0.001
        250 ,//0.01,
        // 5000, //0.1,
    ]


    // State
    const [fromOption, setFromOption] = useState(options[0]);
    const [toOption, setToOption] = useState(options[3]);

    const [fromUnit, setFromUnit] = useState(units[0]);
    const [toUnit, setToUnit] = useState(units[3]);

    const [fromValue, setFromValue] = useState();


    // Functions
    let fromResultValue, toResultValue;

    if(fromUnit > toUnit){
        fromResultValue = fromValue;
        toResultValue = (fromValue/fromUnit) / (1/toUnit);
        if(toResultValue.toString().length >= 6) {
            toResultValue = toResultValue.toExponential(2);
        }
    }  else if(fromUnit < toUnit){
        fromResultValue = fromValue;
        toResultValue = (1/fromUnit) * (fromValue * toUnit);
        if(toResultValue.toString().length >= 6) {
            toResultValue = toResultValue.toExponential(2);
        }
    } else {
        fromResultValue = fromValue;
        toResultValue = fromValue;
    }

    const changeValue = (e) => {
        setFromValue(e.target.value)
    }


    return (
        <form className="form-box">

            <div className="controls">
                <Controls
                name={controlName.from}
                units={units}
                setUnit={setFromUnit}
                options={options}
                selectedOption={fromOption}
                setSelectedOption={setFromOption}/>

                <Controls
                name={controlName.to}
                units={units}
                setUnit={setToUnit}
                options={options}
                selectedOption={toOption}
                setSelectedOption={setToOption}/>
            </div>

            <div className="result-box">
                <div className="input-num">
                    <input
                    onChange={changeValue}
                    className = "inputnum2"
                    type="number"
                    id="input-num"
                    placeholder="00"
                    autoComplete="off"
                    value={fromResultValue}
                    autoFocus/>
                </div>

                <div className="output-num">
                    <input
                    className='inputnum2'
                    type="number"
                    id="output-num"
                    placeholder="00"
                    autoComplete="off"
                    readOnly
                    value={toResultValue}/>
                </div>
            </div>

        </form>
    )
}

export default Form;