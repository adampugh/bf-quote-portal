import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker'
import enGB from 'date-fns/locale/en-GB';

import 'react-datepicker/dist/react-datepicker.css';

import MaterialsInput from './MaterialsInput';
import MaterialsDisplay from './MaterialsDisplay';
import ActivityInput from './ActivityInput';


registerLocale('en-GB', enGB)

const QuoteForm = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobDate, setJobDate] = useState(new Date());
    const [expiryDate, setExpiryDate] = useState(new Date());
    const [quoteNumber, setQuoteNumber] = useState('');
    const [referenceNumber, setReferenceNumber] = useState('');
    const [vatNumber, setVatNumber] = useState('');
    const [materials, setMaterials] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        console.dir({
            jobTitle,
            jobDate,
            expiryDate,
            quoteNumber,
            referenceNumber,
            vatNumber,
            materials
        });
    }

    const addMaterial = newMaterial => {
        console.log(newMaterial)
        setMaterials([...materials, newMaterial])
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form__input">
                <label>Job Title
                    <input 
                        type="text"
                        value={jobTitle}
                        name="jobTitle"
                        required
                        onChange={e => setJobTitle(e.target.value)} />
                </label>
            </div>
            <div className="form__input">
                <label>Job Description
                    <input 
                        type="text"
                        value={jobDescription}
                        name="jobDescription"
                        required
                        onChange={e => setJobDescription(e.target.value)} />
                </label>
            </div>
            <div className="form__input">
                <label>Date
                    <DatePicker 
                        selected={jobDate}
                        onChange={date => setJobDate(date)}
                        closeOnScroll={true} 
                        locale="en-GB"
                        dateFormat="dd/MM/yyyy" />
                </label>
            </div>
            <div className="form__input">
                <label>Expiry Date
                    <DatePicker 
                        selected={expiryDate}
                        onChange={date => setExpiryDate(date)}
                        closeOnScroll={true} 
                        locale="en-GB" 
                        dateFormat="dd/MM/yyyy" />
                </label>
            </div>
            <div className="form__input">
                <label>Quote Number
                    <input 
                        type="text"
                        value={quoteNumber}
                        name="quoteNumber"
                        required
                        onChange={e => setQuoteNumber(e.target.value)} />
                </label>
            </div>
            <div className="form__input">
                <label>Reference
                    <input 
                        type="text"
                        value={referenceNumber}
                        name="referenceNumber"
                        required
                        onChange={e => setReferenceNumber(e.target.value)} />
                </label>
            </div>
            <div className="form__input">
                <label>VAT Number
                    <input 
                        type="text"
                        value={vatNumber}
                        name="vatNumber"
                        required
                        onChange={e => setVatNumber(e.target.value)} />
                </label>
            </div>
            <MaterialsInput addMaterial={addMaterial} />
            <MaterialsDisplay materials={materials} />
            <ActivityInput />
            <input type="submit" value="Save" />
        </form>
    )
};

export default QuoteForm;