import './App.css'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Invoice Extractor & Validator</h1>
        <p>
          Upload an invoice PDF to extract, validate, and export structured
          data.
        </p>
      </header>
      <section className="app-body">
        <div className="placeholder">PDF viewer will render here.</div>
        <div className="placeholder">Extracted fields will appear here.</div>
      </section>
    </main>
  )
}

export default App
