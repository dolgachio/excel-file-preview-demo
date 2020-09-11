import React, { useMemo } from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './ExcelAgGrid.css';

import { getColumnDefs } from './getColumnDefs';
import { xlsxToJson } from '../../../utils/xlsxToJson';

function ExcelAgGrid({ Sheet }) {
    let rowData = useMemo(() => xlsxToJson(Sheet), [Sheet]);
    let columnDefs = useMemo(() => getColumnDefs(rowData), [rowData]);

    return (
    <div className="excel-ag-grid-container ag-theme-alpine">
    <h2>Ag-Grid Rendering version</h2>
    
    <AgGridReact
        defaultColDef={
            {width: 100}
        }
        columnDefs={columnDefs}
        rowData={rowData}>   
    </AgGridReact> 
    </div>
    );
}

export default ExcelAgGrid;