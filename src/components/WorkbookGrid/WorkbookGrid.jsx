import React, { useState, useCallback } from 'react';

import './WorkbookGrid.css';

import GridSelector from './GridSelector';

import ExcelXSpreadSheet from './x-spreadsheet/ExcelXSpreadSheet';
import ExcelAgGrid from './ag-grid/ExcelAgGrid';

let GridsEnum = {
    XSpreadSheet: 'x-spreadsheet',
    AgGrid: 'Ag-Grid',
}

let gridOptions = [
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

    let [selectedGridOptionName, selectGridOptionName] = useState(GridsEnum.XSpreadSheet);

    let onGridOptionChange = useCallback((event) => {
        selectGridOptionName(event.target.value);
    }, [selectGridOptionName]);

    return (
    <div>
        <GridSelector gridOptions={gridOptions} onGridOptionChange={onGridOptionChange} selectedGridOptionName={selectedGridOptionName} />
        
        {selectedGridOptionName === GridsEnum.AgGrid && <ExcelAgGrid workbook={workbook} />}
        {selectedGridOptionName === GridsEnum.XSpreadSheet && <ExcelXSpreadSheet workbook={workbook} />}
    </div>
    );
}

export default WorkBookGrid;