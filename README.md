# K&CO. Billing Dashboard

## Introduction

*KCO Billing Dashboard* is a simple internal web app that demonstrates multi-cloud cost visibility. It reads sample billing exports (AWS / GCP), consolidates and processes them on a small Node.js/Express backend, and displays the results in a React dashboard UI.

## Purpose

The app is intended as a take-home assignment to show:

- *Full-stack ability* - End-to-end application development
- *Data transformation* - Processing and consolidating cloud billing data
- *Clean UI* - User-friendly and intuitive interface
- *Readable code structure* - Well-organized and maintainable codebase

## Features

### Data Loading
- Load sample AWS & GCP cloud billing data from the backend

### Data Table View
Display billing records with the following columns:
- Date
- Cloud Provider
- Service
- Team
- Environment (prod / staging / dev)
- Cost (USD)

### Sorting & Filtering
- *Sorting*: By date and cost
- *Filters*:
  - Cloud provider (AWS / GCP / All)
  - Team
  - Environment (prod / staging / dev / All)
  - Month (YYYY-MM)

### Summary Cards
- Total spend (filtered)
- Spend by cloud provider (AWS / GCP)

### Additional Features
- Detail view modal on row click
- Monthly spend bar chart visualization
- Basic responsive dashboard layout suitable for desktop

### User Experience
Graceful handling of application states:
- "Loading data…"
- "Failed to load data."
- "No data found for this filter."

### Code Organization
- Simple and easily understandable project structure

## Technologies Used

### Frontend
- *React* (Vite)
- *Recharts* - Bar/pie charts visualization
- *Axios* - API calls
- *Pure CSS* - UI styling without heavy frameworks

### Backend
- *Node.js + Express*
- Custom filtering logic
- CSV ingestion & transformation into JSON

### Data
Local sample files stored in backend/data:
- aws_line_items_12mo.csv
- gcp_billing_12mo.csv
- Merged into: sample-data.json

### Dev Tools
- *nodemon*
- *npm*

## Installation

### Clone the Repository

bash
git clone https://github.com/<your-username>/kco-billing-dashboard.git
cd kco-billing-dashboard


### Install Backend Dependencies

bash
cd backend
npm install


### Install Frontend Dependencies

bash
cd ../frontend
npm install


## Usage

### Start Backend

bash
cd backend
npm run dev


Server runs at: 👉 *http://localhost:5000*

### Start Frontend

bash
cd frontend
npm run dev


Frontend runs at: 👉 *http://localhost:5173/*

## API Routes

### 1. Fetch All Data


GET /api/spend


*Expected Response:*

<img width="2849" height="1622" alt="image" src="https://github.com/user-attachments/assets/44fbec89-d63e-4dd9-8656-80a8466cae10" />


### 2. Filter by Cloud Provider


GET /api/spend?cloud=AWS


*Expected Response:* Rows only where cloud_provider = "AWS"

<img width="2852" height="1636" alt="image" src="https://github.com/user-attachments/assets/e7572065-bd0b-450d-996d-f78a202755f6" />

### 3. Filter by Team


GET /api/spend?team=Data


*Expected Response:* Rows only where team = "Data"

<img width="2844" height="1622" alt="image" src="https://github.com/user-attachments/assets/013efb70-2aee-42ec-b037-1ab8a8175917" />

### 4. Combined Filters


GET /api/spend?cloud=GCP&team=Core&env=prod


*Expected Response:* Records where:
- cloud_provider = "GCP"
- team = "Core"
- env = "prod"

<img width="2845" height="1620" alt="image" src="https://github.com/user-attachments/assets/c9421feb-8e90-4af8-8dd6-853c71a52d99" />


## Assumptions Made

- Billing format fields are consistent across cloud providers
- All costs are in USD
- "month" filter uses the first 7 characters of date (YYYY-MM)
- Data does not exceed memory limitations of static load
- No user authentication required for this internal dashboard
- Dashboard will primarily be viewed on desktop web

## What's Completed

- Fully working backend API
- Cloud + Team + Env + Month filters
- Sorting by Date & Cost
- Detail modal on row click
- Summary card with totals
- Monthly spend chart
- CSV transformation into unified JSON dataset
- Simple but clean UI design
- Graceful UX states
- Error handling
- Responsive container layout

## What I Would Do Next (With More Time)

- Add search functionality (filter by service name)
- Data persistence via SQLite or MongoDB instead of static JSON
- Authentication for users & roles

### Screenshot Notice
**Note:** The UI in the screenshots may appear slightly different from the actual application because the display has been zoomed out to capture more visual content in a single frame.