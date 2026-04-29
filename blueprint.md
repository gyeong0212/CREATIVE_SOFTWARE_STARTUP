# NexusFounder OS Blueprint

## Overview

NexusFounder OS is an AI-powered deal-closing platform designed for solo founders. It provides a dashboard-based web application to help entrepreneurs manage investor relations, pitch creation, meetings, and deal negotiations as if they had a full team. This project is built with pure HTML, CSS, and JavaScript, focusing on modern web standards and a clean, responsive SaaS-style user interface.

## Project Outline & Features

### 1. Core Structure & Layout
- **Multi-Page Layout:** A single-page application (SPA) feel where content is dynamically shown/hidden, managed by JavaScript.
- **Header:** Contains the application title, slogan, and a dark/light mode toggle.
- **Sidebar:** A fixed vertical navigation bar that controls page display.
- **Main Content:** A container for different pages.

### 2. Pages & Widgets

#### A. Dashboard Page (`#dashboard-page`)
- **KPI Cards:** Key performance indicators.
- **Agent Status:** Status of the four AI agents.
- **Investor Pipeline Board:** A Kanban-style board for deal flow.
- **Investor Recommendations:** A list of potential investors.
- **Demo Section:** An interactive demo mode simulator.

#### B. Pitch Agent Page (`#pitch-agent-page`)
- **Input Form:** Text areas for Business Idea, Target Audience, and Business Model.
- **Generate Button:** A button to trigger mock pitch generation.
- **Output Area:** Displays the generated pitch (Problem, Solution, etc.).

#### C. Outreach Agent Page (`#outreach-agent-page`)
- **Input Form:** Dropdown selectors for `스타트업 섹터` (Sector), `투자 단계` (Stage), `목표 투자금` (Goal), and `지역` (Region).
- **Matching Button:** A "투자자 매칭" (Match Investors) button.
- **Output Area:** Displays a list of recommended investor cards, each including:
  - Investor/VC Name
  - Fit Score (%)
  - Investment Thesis
  - Recommendation Reason
  - Draft of a personalized outreach message.

### 3. Interactive Features
- **Page Navigation:** Sidebar links show/hide pages.
- **Theme Toggle:** Switches between light and dark modes with `localStorage` persistence.
- **Demo Mode:** Simulates AI agent workflow on the dashboard.
- **Pitch Generation:** Mock pitch generation on the Pitch Agent page.
- **Investor Matching:** Mock investor matching on the Outreach Agent page.

## Current Plan: Implement Outreach Agent Page

1.  **[Done] Create `blueprint.md`:** Document the project's purpose and features.
2.  **[Done] Implement Initial Dashboard & Pitch Agent Page:** Create the HTML, CSS, and JS for the initial pages.
3.  **[Next] Update `index.html`:** Add the new, hidden HTML structure for the Outreach Agent page.
4.  **[Pending] Update `style.css`:** Add styles for the Outreach Agent's form and result cards.
5.  **[Pending] Update `main.js`:** Implement the navigation and mock investor matching functionality.
