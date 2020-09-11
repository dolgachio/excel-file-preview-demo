import React, { useState, useCallback, useMemo } from 'react';

import './WorkbookGrid.css';

import GridSelector from './GridSelector';
import SheetsSelector from './SheetsSelector/SheetsSelector';
import ExcelAgGrid from './ag-grid/ExcelAgGrid';

let GridsEnum = {
    ReactDataGrid: 'react-data-grid',
    XSpreadSheet: 'x-spreadsheet',
    AgGrid: 'Ag-Grid',
}

let gridOptions = [
    {
        name: GridsEnum.ReactDataGrid,
        link: 'https://github.com/adazzle/react-data-grid',
    },
    {
        name: GridsEnum.XSpreadSheet,
        link: 'https://github.com/myliang/x-spreadsheet',
    },
    {
        name: GridsEnum.AgGrid,
        link: 'https://www.ag-grid.com',
    }
];

function WorkBookGrid({ workbook }) {

    let [sheetName, setActiveSheetName] = useState(workbook.SheetNames[0]);
    let [selectedGridOptionName, selectGridOptionName] = useState(GridsEnum.ReactDataGrid);

    let onSheetNameChange = useCallback((event) => {
        let sheetName = event.target.name;
        setActiveSheetName(sheetName);
    }, [setActiveSheetName]);

    let onGridOptionChange = useCallback((event) => {
        selectGridOptionName(event.target.value);
    }, [selectGridOptionName]);

    let Sheet = useMemo(() => {
        return workbook.Sheets[sheetName];
    }, [workbook, sheetName]);

    return (
    <div>
        <GridSelector gridOptions={gridOptions} onGridOptionChange={onGridOptionChange} selectedGridOptionName={selectedGridOptionName} />
        <SheetsSelector SheetNames={workbook.SheetNames} onSheetNameChange={onSheetNameChange} sheetName={sheetName}/>
        {selectedGridOptionName === GridsEnum.AgGrid && <ExcelAgGrid Sheet={Sheet} />}
    </div>
    );
}

export default WorkBookGrid;