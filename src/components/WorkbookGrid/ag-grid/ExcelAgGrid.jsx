import React, { useMemo, useState, useCallback } from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './ExcelAgGrid.css';

import { getColumnDefs } from './getColumnDefs';
import { xlsxToJson } from '../../../utils/xlsxToJson';

import SheetsSelector from '../SheetsSelector/SheetsSelector';

function ExcelAgGrid({ workbook }) {
    let [sheetName, setActiveSheetName] = useState(workbook.SheetNames[0]);
    
    let Sheet = useMemo(() => {
        return workbook.Sheets[sheetName];
    }, [workbook, sheetName]);
    
    let onSheetNameChange = useCallback((event) => {
        let sheetName = event.target.name;
        setActiveSheetName(sheetName);
    }, [setActiveSheetName]);
    
    let rowData = useMemo(() => xlsxToJson(Sheet), [Sheet]);
    let columnDefs = useMemo(() => getColumnDefs(rowData), [rowData]);
    
    return (
    <div>
        <h2>Ag-Grid Rendering version</h2>

        <SheetsSelector SheetNames={workbook.SheetNames} 
            onSheetNameChange={onSheetNameChange}
            sheetName={sheetName}/>

        <div className="excel-ag-grid-container ag-theme-alpine">
            <AgGridReact
                defaultColDef={
                    {width: 100}
                }
                columnDefs={columnDefs}
                rowData={rowData}>   
            </AgGridReact> 
        </div>
    </div>
    
    );
}

export default ExcelAgGrid;