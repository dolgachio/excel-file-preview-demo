import React, { useState, useCallback, useMemo } from 'react';

function WorkbookGrid({ workbook }) {

    let [activeSheetName, setActiveSheetName] = useState(null); 

    let onSheetNameChange = useCallback((event) => {
        let sheetName = event.target.name;
        setActiveSheetName(sheetName);
    }, [setActiveSheetName]);

    let SheetsNames = useMemo(() => workbook.SheetNames
        .map((name) => (<button key={name} name={name} onClick={onSheetNameChange}>{name}</button>)), 
        [workbook, onSheetNameChange]);

    return (
    <>
    <h4>Available Sheets from file:</h4>
    <div>
        {SheetsNames}
    </div>

    <div>{activeSheetName}</div>
    </>
    );
}

export default WorkbookGrid;