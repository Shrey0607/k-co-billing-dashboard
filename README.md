# KCO Billing Dashboard

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

json
[
  {
    "date": "2025-01-01",
    "cloud_provider": "AWS",
    "service": "EC2",
    "team": "Core",
    "env": "prod",
    "cost_usd": 1234.56
  },
  ...
]
<img width="2850" height="1615" alt="image" src="https://github.com/user-attachments/assets/a4528ba8-a1cb-4b20-b64a-861a37b11934" />


### 2. Filter by Cloud Provider


GET /api/spend?cloud=AWS

*Expected Response:* Rows only where cloud_provider = "AWS"

<img width="2861" height="1630" alt="image" src="https://github.com/user-attachments/assets/ee8e749b-63e2-4732-8502-92074d411341" />

### 3. Filter by Team


GET /api/spend?team=Data


*Expected Response:* Rows only where team = "Data"

<img width="2850" height="1615" alt="image" src="https://github.com/user-attachments/assets/8deb1ba4-66a3-4d9d-b121-5ac8f3c75a4a" />

### 4. Combined Filters


GET /api/spend?cloud=GCP&team=Core&env=prod


*Expected Response:* Records where:
- cloud_provider = "GCP"
- team = "Core"
- env = "prod"

  <img width="2852" height="1616" alt="image" src="https://github.com/user-attachments/assets/3d92c8d0-8048-4a5b-9c41-6f4dd0d3b72a" />


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
