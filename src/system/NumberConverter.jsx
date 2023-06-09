import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const NumberConverter = () => {
    const [value, setValue] = useState();
    const [copied, setCopied] = useState();

    const handleCopy = (value) => {
        setValue(value);
        setCopied(false)

    };

    //============================================================================
    const [inputValue, setInputValue] = useState('');
    const [selectedSystem, setSelectedSystem] = useState('');
    const [convertedNumbers, setconvertedNumbers] = useState()
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSystemChange = (event) => {
        setSelectedSystem(event.target.value);
    };

    const convertNumber = () => {
        if (inputValue && selectedSystem) {
            const number = parseInt(inputValue, 10);
            let convertedNumber;

            switch (selectedSystem) {
                case 'binary':
                    convertedNumber = number.toString(2);
                    break;
                case 'octal':
                    convertedNumber = number.toString(8);
                    break;
                case 'decimal':
                    convertedNumber = number.toString(10);
                    break;
                case 'hexadecimal':
                    convertedNumber = number.toString(16);
                    break;
                default:
                    convertedNumber = '';
            }

            setconvertedNumbers(convertedNumber)
        }
    };

    return (
        <div className='row align-items-center text-center justify-content-center'>
            <div className="col-12">

                <h2 className='text-center'>Ixtiyoriy kiritilgan raqamni belgilangan sanoq sistemasiga o'girish</h2>
            </div>
            <div className="col-8 mt-5">
                <div className="card card_body">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Qiymat kiriting</label>
                        <input type="number" value={inputValue} onChange={handleChange} placeholder="Qiymat kiriting" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">Siz kiritgan qiymat turi raqam bo'lishi shart !</div>
                    </div>


                    <div class="mb-3">
                        <select className="form-select" aria-label="Default select example" value={selectedSystem} onChange={handleSystemChange}>
                            <option value="">Sanoq tizimini tanlang</option>
                            <option value="binary">Ikkilik</option>
                            <option value="octal">Sakkizlik</option>
                            <option value="decimal">O'nlik</option>
                            <option value="hexadecimal">O'n oltilik</option>
                        </select>
                    </div>
                    <button className='btn btn-success' onClick={convertNumber}>O'girish</button>
                </div>
            </div>
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        Natijani ko'rish
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" >Natija: {convertedNumbers}</h5>
                        <p className="card-text">Kompyuter tashkil etilishi</p>
                        <a onClick={() => handleCopy(convertedNumbers)} className="btn btn-primary">Matndan nusxa olish</a>
                        <CopyToClipboard text={value}
                            onCopy={() => setCopied(true)}>
                            <span></span>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberConverter;
