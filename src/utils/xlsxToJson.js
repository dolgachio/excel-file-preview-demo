import XLSX from 'xlsx';

export function xlsxToJson(Sheet) {
    let options = {
        raw: false,
        header: 'A',
        blankrows: false,
        cellStyles: true,
    }

    return XLSX.utils.sheet_to_json(Sheet, options);
}