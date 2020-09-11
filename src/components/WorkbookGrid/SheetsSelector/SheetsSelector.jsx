import React, { useMemo } from 'react';

import './SheetsSelector.css';

function SheetsSelector({ SheetNames, onSheetNameChange, sheetName }) {
    let SheetsNames = useMemo(() => SheetNames
        .map((name) => (<button 
            className={`sheets-selector__button ${name === sheetName && 'sheets-selector__button_active'}`} 
            key={name} 
            name={name} 
            onClick={onSheetNameChange}>{name}</button>)), 
        [SheetNames, onSheetNameChange, sheetName]);

    return (
    <div className="sheets-selector">
        <h2>Sheets: </h2>
        {SheetsNames}
    </div>
    );
}

export default SheetsSelector;