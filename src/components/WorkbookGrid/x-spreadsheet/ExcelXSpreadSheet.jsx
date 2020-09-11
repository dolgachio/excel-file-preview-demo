import React, { useRef, useMemo, useEffect } from 'react';

import XLSX from 'xlsx';
import Spreadsheet  from 'x-data-spreadsheet';

import '../../../../node_modules/x-data-spreadsheet/dist/xspreadsheet.css';

import './ExcelXSpreadSheet.css';

function ExcelXSpreadSheet({ workbook }) {
    let gridContainerRef = useRef(null);

    let out = useMemo(() => {
        let out = [];
        workbook.SheetNames.forEach((name) => {
          let o = { name:name, rows:{} };
          let Sheet = workbook.Sheets[name];
          let SheetJson = XLSX.utils.sheet_to_json(Sheet, {raw: false, header:1});
          
          SheetJson.forEach((r, i) => {
            let cells = {};
            r.forEach(function(c, j) { cells[j] = ({ text: c }); });
            o.rows[i] = { cells: cells };
          })
          out.push(o);
        });
        
        return out;
    }, [workbook]);


    useEffect(() => {
        let grid;
        if (!gridContainerRef.current) {
            return;
        } 

        gridContainerRef.current.innerHTML = '';
        let options = { 
            mode: 'read',
            showToolbar: false,
            view: {
                height: () => gridContainerRef.current.clientHeight,
                width: () => gridContainerRef.current.clientWidth,
            },
        };
        
        grid = new Spreadsheet(gridContainerRef.current, options);

        grid.loadData(out);
    }, [out]);

    return (
    <div className="excel-x-spreadsheet">
        <h2>X-spreadsheet Rendering version</h2>
    
        <div ref={gridContainerRef} className="excel-x-spreadsheet-grid-container"></div>
    </div>
    );
}

export default ExcelXSpreadSheet;