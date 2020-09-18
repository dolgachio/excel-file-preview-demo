(this["webpackJsonpreact-excel-file-preview-demo"]=this["webpackJsonpreact-excel-file-preview-demo"]||[]).push([[3],{22:function(e,t){},32:function(e,t){},33:function(e,t){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(0),l=a.n(r),c=a(15),o=a.n(c);a(34),a(35),a(36);var i=function(e){var t=e.gridOptions,a=e.onGridOptionChange,n=e.selectedGridOptionName,r=t.reduce((function(e,t){var r=n===t.name,c=l.a.createElement("label",{key:t.name},l.a.createElement("input",{type:"radio",onChange:a,name:"grid-option",value:t.name,checked:r})," ",l.a.createElement("b",null,t.name)),o=l.a.createElement("a",{className:"grid-selector__link",key:t.name,href:t.link,rel:"noopener noreferrer",target:"_blank"},t.name);return e.radios.push(c),e.links.push(o),e}),{radios:[],links:[]});return l.a.createElement("div",{className:"grid-selector"},l.a.createElement("p",null,"We use ",r.links.length," different libraries for displaying data. Here you can find links to them: ",r.links,"."),l.a.createElement("p",null,"For parsing files we use the ",l.a.createElement("a",{href:"https://github.com/SheetJS/sheetjs",rel:"noopener noreferrer",target:"_blank"},"SheetJS")),r.radios)},u=a(56);a(38),a(39),a(40);var s=function(e){var t=e.cellValue,a=e.onCellDataRequest,c=Object(r.useState)(""),o=Object(n.a)(c,2),i=o[0],u=o[1];return l.a.createElement("div",{className:"cell-value-input"},l.a.createElement("div",null,"Get Value From The Cell"),l.a.createElement("p",null,"We get values from the FIRST SHEET from the file."),l.a.createElement("div",{className:"cell-value-input__field"},l.a.createElement("label",{htmlFor:"cell-name"},"Cell Name (A1, B2, C3 etc): "),l.a.createElement("input",{name:"cell-name",type:"text",value:i,onChange:function(e){return u(e.target.value)}})),l.a.createElement("button",{onClick:function(){return a(i)}},"Get Cell Value"),l.a.createElement("div",{className:"cell-value-input__cell-value"},"The cell value is: ",l.a.createElement("b",null,t||"Cell value is not available or empty...")))};function m(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),l=a[0],c=a[1];return[l,Object(r.useCallback)((function(t){var a,r=Object(n.a)(e.SheetNames,1)[0],l=e.Sheets[r],o=t.trim().toUpperCase();c(null===(a=l[o])||void 0===a?void 0:a.v)}),[e,c])]}var f=function(e){var t=e.workbook,a=m(t),c=Object(n.a)(a,2),i=c[0],f=c[1],h=Object(r.useRef)(null),d=Object(r.useMemo)((function(){var e=[];return t.SheetNames.forEach((function(a){var n={name:a,rows:{}},r=t.Sheets[a];o.a.utils.sheet_to_json(r,{raw:!1,header:1}).forEach((function(e,t){var a={};e.forEach((function(e,t){a[t]={text:e}})),n.rows[t]={cells:a}})),e.push(n)})),e}),[t]);return Object(r.useEffect)((function(){if(h.current){h.current.innerHTML="";var e={mode:"read",showToolbar:!1,view:{height:function(){return h.current.clientHeight},width:function(){return h.current.clientWidth}}};new u.a(h.current,e).loadData(d)}}),[d]),l.a.createElement("div",{className:"excel-x-spreadsheet"},l.a.createElement("h2",null,"X-spreadsheet Rendering version"),l.a.createElement(s,{cellValue:i,onCellDataRequest:f}),l.a.createElement("div",{ref:h,className:"excel-x-spreadsheet-grid-container"}))},h=a(41),d=(a(52),a(53),a(54),a(12));function v(e){var t=new Set;e.forEach((function(e){Object.keys(e).forEach((function(e){return t.add(e)}))}));var a=Array.from(t).sort();return[{headerName:"",valueGetter:function(e){return e.node.rowIndex},pinned:!0,width:50}].concat(Object(d.a)(a.map((function(e){return{field:e,headerName:e}}))))}a(55);var p=function(e){var t=e.SheetNames,a=e.onSheetNameChange,n=e.sheetName,c=Object(r.useMemo)((function(){return t.map((function(e){return l.a.createElement("button",{className:"sheets-selector__button ".concat(e===n&&"sheets-selector__button_active"),key:e,name:e,onClick:a},e)}))}),[t,a,n]);return l.a.createElement("div",{className:"sheets-selector"},l.a.createElement("h2",null,"Sheets: "),c)};var b=function(e){var t=e.workbook,a=Object(r.useState)(t.SheetNames[0]),c=Object(n.a)(a,2),i=c[0],u=c[1],f=m(t),d=Object(n.a)(f,2),b=d[0],E=d[1],g=Object(r.useMemo)((function(){return t.Sheets[i]}),[t,i]),k=Object(r.useCallback)((function(e){var t=e.target.name;u(t)}),[u]),w=Object(r.useMemo)((function(){return function(e){return o.a.utils.sheet_to_json(e,{raw:!1,header:"A",blankrows:!1,cellStyles:!0})}(g)}),[g]),O=Object(r.useMemo)((function(){return v(w)}),[w]);return l.a.createElement("div",null,l.a.createElement("h2",null,"Ag-Grid Rendering version"),l.a.createElement(s,{cellValue:b,onCellDataRequest:E}),l.a.createElement(p,{SheetNames:t.SheetNames,onSheetNameChange:k,sheetName:i}),l.a.createElement("div",{className:"excel-ag-grid-container ag-theme-alpine"},l.a.createElement(h.AgGridReact,{defaultColDef:{width:100},columnDefs:O,rowData:w})))},E="x-spreadsheet",g="Ag-Grid",k=[{name:E,link:"https://github.com/myliang/x-spreadsheet"},{name:g,link:"https://www.ag-grid.com"}];var w=function(e){var t=e.workbook,a=Object(r.useState)(E),c=Object(n.a)(a,2),o=c[0],u=c[1],s=Object(r.useCallback)((function(e){u(e.target.value)}),[u]);return l.a.createElement("div",null,l.a.createElement(i,{gridOptions:k,onGridOptionChange:s,selectedGridOptionName:o}),o===g&&l.a.createElement(b,{workbook:t}),o===E&&l.a.createElement(f,{workbook:t}))};t.default=function(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),a=t[0],c=t[1],i=Object(r.useCallback)((function(e){var t=e.target.files,a=Object(n.a)(t,1)[0],r=new FileReader;r.onload=function(e){var t=new Uint8Array(e.target.result),a=o.a.read(t,{type:"array",cellStyles:!0});a.SheetNames.forEach((function(e){v(o.a.utils.sheet_to_json(a.Sheets[e],{raw:!1,header:"A",blankrows:!1,cellStyles:!0}))})),c(a)},r.readAsArrayBuffer(a)}),[c]);return l.a.createElement("div",{className:"excel-preview"},l.a.createElement("p",null,"We support: *.xls, *.xlsx, *.csv files. Please, chose some file for preview."),l.a.createElement("input",{onChange:i,accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",className:"excel-preview__input-file",type:"file"}),a&&l.a.createElement(w,{workbook:a}))}}}]);
//# sourceMappingURL=3.c4dafeae.chunk.js.map