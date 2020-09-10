import React from 'react';

import './ExcelPreview.css';

function ExcelPreview() {
    return (
    <div className="excel-preview ">
        <p>we support: </p>

        <input
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            className="excel-preview__input-file" 
            type="file" />
    </div>
    );
}

export default ExcelPreview;