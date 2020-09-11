export function getColumnDefs(rowData) {
    let columnFields = new Set();

    let numbersColumn = {
        headerName: '',
        valueGetter(rowData) {
            return rowData.node.rowIndex;
        },
        pinned: true,
        width: 50
    }

    rowData.forEach((row) => {
        let keys = Object.keys(row);
        keys.forEach((key) => columnFields.add(key));
    });

    let columnFieldsArray = Array.from(columnFields).sort();

    return [numbersColumn, ...columnFieldsArray.map((columnName) => ({ field: columnName, headerName: columnName }))];
}