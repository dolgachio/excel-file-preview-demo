import React, { Suspense } from 'react';
import './App.css';

const ExcelPreview = React.lazy(() => import('./components/ExcelPreview/ExcelPreview'));

function App() {
  return (
    <section className="app">
      <header className="app__header">
        <h1>React Demo For Excel Files Preview</h1>
      </header>

      <p>
        For the demo we use the open source library <a href="https://github.com/SheetJS/sheetjs" rel="noopener noreferrer" target="_blank">SheetJS</a>
      </p>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ExcelPreview />
        </Suspense>
      </div>

      
    </section>
  );
}

export default App;
