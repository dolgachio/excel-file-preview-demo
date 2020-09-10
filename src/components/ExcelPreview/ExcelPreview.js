import React, { useCallback, useState } from 'react';

import XLSX from 'xlsx';

import './ExcelPreview.css';
import WorkbookGrid from '../WorkbookGrid/WorkbookGrid';

function ExcelPreview() {

    let [workbook, setWorkbook] = useState(null);

    let onFileChange = useCallback((event) => {
        let files = event.target.files;
        let [file] = files;
        
        let reader = new FileReader();
        
        reader.onload = function(event) {
          let data = new Uint8Array(event.target.result);
          let workbook = XLSX.read(data, { type: 'array' });

          setWorkbook(workbook);
        };
        reader.readAsArrayBuffer(file);
    }, [setWorkbook]);

    return (
    <div className="excel-preview ">
        <p>We support: *.xls, *.xlsx, *.csv files</p>

        {workbook && <WorkbookGrid workbook={workbook}/>}

        <input
            onChange={onFileChange}
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            className="excel-preview__input-file" 
            type="file" />
    </div>
    );
}

export default ExcelPreview;