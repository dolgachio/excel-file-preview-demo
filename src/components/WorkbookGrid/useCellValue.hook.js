import { useState, useCallback } from 'react';

export function useCellValue(workbook) {
    let [cellValue, setCellValue] = useState(null);

    let onCellDataRequest = useCallback((cellName) => {
        let [firstSheetName] = workbook.SheetNames;
        let firstSheet = workbook.Sheets[firstSheetName];
        let normalizedCellName = cellName.trim().toUpperCase();

        setCellValue(firstSheet[normalizedCellName]?.v);
    }, [workbook, setCellValue]);

    return [cellValue, onCellDataRequest];
}