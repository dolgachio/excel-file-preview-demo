import React, { useCallback, useState } from 'react';

import XLSX from 'xlsx';

import './ExcelPreview.css';
import WorkbookGrid from '../WorkbookGrid/WorkbookGrid';
import { getColumnDefs } from '../WorkbookGrid/ag-grid/getColumnDefs';

function ExcelPreview() {

    let [workbook, setWorkbook] = useState(null);

    let onFileChange = useCallback((event) => {
        let files = event.target.files;
        let [file] = files;
        
        let reader = new FileReader();
        
        reader.onload = function(event) {
          let data = new Uint8Array(event.target.result);   
          let workbook = XLSX.read(data, { type: 'array', cellStyles: true });

          console.log(workbook);

          workbook.SheetNames.forEach((SheetName) => {
              let sheetJSON = XLSX.utils.sheet_to_json(workbook.Sheets[SheetName], { raw: false, header: 'A', blankrows: false, cellStyles: true });
              console.log(JSON.stringify(sheetJSON));
              getColumnDefs(sheetJSON);
          });

          setWorkbook(workbook);
        };
        reader.readAsArrayBuffer(file);
    }, [setWorkbook]);

    return (
    <div className="excel-preview ">
        <p>We support: *.xls, *.xlsx, *.csv files</p>

        <input
            onChange={onFileChange}
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            className="excel-preview__input-file" 
            type="file" />
        
        {workbook && <WorkbookGrid workbook={workbook}/>}
    </div>
    );
}

export default ExcelPreview;