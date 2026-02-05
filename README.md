# Invoice Extractor & Validator

A lightweight web application that demonstrates how the Apryse Web SDK can be used to extract structured data from invoice PDFs, validate it, and export it for downstream systems.

The project is intentionally scoped as a frontend-focused demo to showcase SDK integration, document workflows, and business value rather than a full production backend.

---

## Overview

Invoices are commonly exchanged as PDFs, requiring manual data entry into accounting or ERP systems. This process is time-consuming and error-prone.

**Invoice Extractor & Validator** addresses this by:
- Rendering invoice PDFs directly in the browser
- Extracting relevant textual data
- Parsing key invoice fields
- Validating extracted values
- Exporting structured data (JSON / CSV)

The app demonstrates how PDF processing capabilities can be embedded into a modern web application to automate document-heavy workflows.

---

## Key Features

- **PDF Viewer**
  - In-browser rendering of invoice PDFs
  - Powered by the Apryse WebViewer

- **Text Extraction**
  - Extracts text from all pages of a PDF using the Full API
  - Designed for text-based (non-scanned) invoices

- **Invoice Field Parsing**
  - Detects common invoice fields:
    - Invoice number
    - Invoice date
    - Total amount
    - VAT / tax amount
    - Currency
  - Uses heuristic-based parsing (regex + normalization)

- **Validation**
  - Highlights missing or inconsistent values
  - Basic checks (e.g. VAT higher than total, missing invoice number)

- **Manual Review & Correction**
  - Extracted fields are editable
  - Designed for “human-in-the-loop” workflows

- **Export**
  - Export extracted data as:
    - JSON
    - CSV
  - Ready for integration with accounting or ERP systems

---

## Tech Stack

- **Frontend**
  - React (JavaScript)
  - Vite

- **PDF & Document Processing**
  - Apryse WebViewer (Full API)

- **Utilities**
  - React Router
  - PapaParse (CSV export)

- **Architecture**
  - Frontend-only
  - No backend or database
  - State managed in-memory for simplicity

---

## User Flow

1. Upload an invoice PDF
2. View the document in the embedded PDF viewer
3. Click **“Extract fields”**
4. Review and optionally edit extracted values
5. Validate extracted data
6. Export structured data as JSON or CSV

---

## Project Goals

This project is designed to:

- Demonstrate practical integration of the Apryse SDK
- Showcase document automation workflows
- Emphasize clarity, usability, and real-world business scenarios
- Serve as a pre-sales / solutions engineering demo rather than a production system

---

## Limitations (By Design)

- No authentication or user management
- No persistent storage
- No backend services
- OCR for scanned documents is not enabled in the MVP

These constraints keep the focus on SDK usage and workflow design.

---

## Possible Extensions

- OCR support for scanned invoices
- Confidence scoring for extracted fields
- Visual highlighting of extracted fields within the PDF
- Export annotated PDFs with detected field boxes
- Backend integration for batch processing or storage

---

## Getting Started

```bash
npm install
npm run dev
