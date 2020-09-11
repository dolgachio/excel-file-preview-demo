import React from 'react';

import './GridSelector.css';


function GridSelector({ gridOptions, onGridOptionChange, selectedGridOptionName }) {

    let options = gridOptions.reduce((result, option) => {
        let isSelected = selectedGridOptionName === option.name;

        let radio = (
        <label key={option.name}>
            <input type="radio"
                onChange={onGridOptionChange} 
                name="grid-option" value={option.name} 
                checked={isSelected}/> <b>{option.name}</b>
        </label>
        );

        let link = (<a className="grid-selector__link" key={option.name} href={option.link} rel="noopener noreferrer" target="_blank">{option.name}</a>);

        result.radios.push(radio);
        result.links.push(link);

        return result;
    }, { radios: [], links: [] });

    return (
    <div className="grid-selector">
        <p>
            We use {options.links.length} different libraries for displaying data. Here you can find links to them: {options.links}.
        </p>
        <p>
            For parsing files we use the <a href="https://github.com/SheetJS/sheetjs" rel="noopener noreferrer" target="_blank">SheetJS</a>
        </p>
        
        {options.radios}
    </div>
    )
};

export default GridSelector;