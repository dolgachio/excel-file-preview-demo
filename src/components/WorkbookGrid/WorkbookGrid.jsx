import React, { useState, useCallback, useMemo } from 'react';

import SheetsSelector from './SheetsSelector/SheetsSelector';
import ExcelAgGrid from './ag-grid/ExcelAgGrid';

function WorkBookGrid({ workbook }) {

    let [sheetName, setActiveSheetName] = useState(workbook.SheetNames[0]);

    let onSheetNameChange = useCallback((event) => {
        let sheetName = event.target.name;
        setActiveSheetName(sheetName);
    }, [setActiveSheetName]);

    let Sheet = useMemo(() => {
        return workbook.Sheets[sheetName];
    }, [workbook, sheetName]);

    return (
    <div>
        <SheetsSelector SheetNames={workbook.SheetNames} onSheetNameChange={onSheetNameChange} sheetName={sheetName}/>
        <ExcelAgGrid Sheet={Sheet} />
    </div>
    );
}

export default WorkBookGrid;