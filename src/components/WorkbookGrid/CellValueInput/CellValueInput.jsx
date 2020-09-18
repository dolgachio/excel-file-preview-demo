import React, { useState } from 'react';

import './CellValueInput.css';

function CellValueInput({ cellValue, onCellDataRequest }) {
    let [ cellName, setCellName ] = useState('');

    return (
    <form onSubmit={(event) => {event.preventDefault(); onCellDataRequest(cellName);}} className="cell-value-input">
        <div>Get Value From The Cell</div>

        <p>
            We get values from the FIRST SHEET from the file.
        </p>

        <div className="cell-value-input__field">
            <label htmlFor="cell-name">Cell Name (A1, B2, C3 etc): </label>
            <input name="cell-name" type="text" value={cellName}
                onChange={(event) => setCellName(event.target.value)}/>
        </div>

        <button type="submit">Get Cell Value</button>

        <div className="cell-value-input__cell-value">
            The cell value is: <b>{cellValue || 'Cell value is not available or empty...'}</b>
        </div>
    </form>
    )
}

export default CellValueInput;