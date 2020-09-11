(this["webpackJsonpreact-excel-file-preview-demo"]=this["webpackJsonpreact-excel-file-preview-demo"]||[]).push([[3],{22:function(e,t){},32:function(e,t){},33:function(e,t){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(0),c=n.n(r),o=n(15),l=n.n(o);n(34),n(35),n(36);var i=function(e){var t=e.gridOptions,n=e.onGridOptionChange,a=e.selectedGridOptionName,r=t.reduce((function(e,t){var r=a===t.name,o=c.a.createElement("label",{key:t.name},c.a.createElement("input",{type:"radio",onChange:n,name:"grid-option",value:t.name,checked:r})," ",c.a.createElement("b",null,t.name)),l=c.a.createElement("a",{className:"grid-selector__link",key:t.name,href:t.link,rel:"noopener noreferrer",target:"_blank"},t.name);return e.radios.push(o),e.links.push(l),e}),{radios:[],links:[]});return c.a.createElement("div",{className:"grid-selector"},c.a.createElement("p",null,"We use ",r.links.length," different libraries for displaying data. Here you can find links to them: ",r.links,"."),c.a.createElement("p",null,"For parsing files we use the ",c.a.createElement("a",{href:"https://github.com/SheetJS/sheetjs",rel:"noopener noreferrer",target:"_blank"},"SheetJS")),r.radios)},s=n(55);n(38),n(39);var u=function(e){var t=e.workbook,n=Object(r.useRef)(null),a=Object(r.useMemo)((function(){var e=[];return t.SheetNames.forEach((function(n){var a={name:n,rows:{}},r=t.Sheets[n];l.a.utils.sheet_to_json(r,{raw:!1,header:1}).forEach((function(e,t){var n={};e.forEach((function(e,t){n[t]={text:e}})),a.rows[t]={cells:n}})),e.push(a)})),e}),[t]);return Object(r.useEffect)((function(){if(n.current){n.current.innerHTML="";var e={mode:"read",showToolbar:!1,view:{height:function(){return n.current.clientHeight},width:function(){return n.current.clientWidth}}};new s.a(n.current,e).loadData(a)}}),[a]),c.a.createElement("div",{className:"excel-x-spreadsheet"},c.a.createElement("h2",null,"X-spreadsheet Rendering version"),c.a.createElement("div",{ref:n,className:"excel-x-spreadsheet-grid-container"}))},m=n(40),f=(n(51),n(52),n(53),n(11));function h(e){var t=new Set;e.forEach((function(e){Object.keys(e).forEach((function(e){return t.add(e)}))}));var n=Array.from(t).sort();return[{headerName:"",valueGetter:function(e){return e.node.rowIndex},pinned:!0,width:50}].concat(Object(f.a)(n.map((function(e){return{field:e,headerName:e}}))))}n(54);var d=function(e){var t=e.SheetNames,n=e.onSheetNameChange,a=e.sheetName,o=Object(r.useMemo)((function(){return t.map((function(e){return c.a.createElement("button",{className:"sheets-selector__button ".concat(e===a&&"sheets-selector__button_active"),key:e,name:e,onClick:n},e)}))}),[t,n,a]);return c.a.createElement("div",{className:"sheets-selector"},c.a.createElement("h2",null,"Sheets: "),o)};var p=function(e){var t=e.workbook,n=Object(r.useState)(t.SheetNames[0]),o=Object(a.a)(n,2),i=o[0],s=o[1],u=Object(r.useMemo)((function(){return t.Sheets[i]}),[t,i]),f=Object(r.useCallback)((function(e){var t=e.target.name;s(t)}),[s]),p=Object(r.useMemo)((function(){return function(e){return l.a.utils.sheet_to_json(e,{raw:!1,header:"A",blankrows:!1,cellStyles:!0})}(u)}),[u]),v=Object(r.useMemo)((function(){return h(p)}),[p]);return c.a.createElement("div",null,c.a.createElement("h2",null,"Ag-Grid Rendering version"),c.a.createElement(d,{SheetNames:t.SheetNames,onSheetNameChange:f,sheetName:i}),c.a.createElement("div",{className:"excel-ag-grid-container ag-theme-alpine"},c.a.createElement(m.AgGridReact,{defaultColDef:{width:100},columnDefs:v,rowData:p})))},v="x-spreadsheet",b="Ag-Grid",g=[{name:v,link:"https://github.com/myliang/x-spreadsheet"},{name:b,link:"https://www.ag-grid.com"}];var k=function(e){var t=e.workbook,n=Object(r.useState)(v),o=Object(a.a)(n,2),l=o[0],s=o[1],m=Object(r.useCallback)((function(e){s(e.target.value)}),[s]);return c.a.createElement("div",null,c.a.createElement(i,{gridOptions:g,onGridOptionChange:m,selectedGridOptionName:l}),l===b&&c.a.createElement(p,{workbook:t}),l===v&&c.a.createElement(u,{workbook:t}))};t.default=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(r.useCallback)((function(e){var t=e.target.files,n=Object(a.a)(t,1)[0],r=new FileReader;r.onload=function(e){var t=new Uint8Array(e.target.result),n=l.a.read(t,{type:"array",cellStyles:!0});n.SheetNames.forEach((function(e){h(l.a.utils.sheet_to_json(n.Sheets[e],{raw:!1,header:"A",blankrows:!1,cellStyles:!0}))})),o(n)},r.readAsArrayBuffer(n)}),[o]);return c.a.createElement("div",{className:"excel-preview"},c.a.createElement("p",null,"We support: *.xls, *.xlsx, *.csv files. Please, chose some file for preview."),c.a.createElement("input",{onChange:i,accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",className:"excel-preview__input-file",type:"file"}),n&&c.a.createElement(k,{workbook:n}))}}}]);
//# sourceMappingURL=3.c3b9fe56.chunk.js.map