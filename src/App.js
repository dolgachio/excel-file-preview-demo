import React, { Suspense } from 'react';
import './App.css';

const ExcelPreview = React.lazy(() => import('./components/ExcelPreview/ExcelPreview'));

function App() {
  return (
    <section className="app">
      <header className="app__header">
        <h1>React Demo For Excel Files Preview</h1>
      </header>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ExcelPreview />
        </Suspense>
      </div>

    </section>
  );
}

export default App;
