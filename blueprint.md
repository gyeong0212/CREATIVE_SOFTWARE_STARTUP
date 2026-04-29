# NexusFounder OS Blueprint

## Overview

NexusFounder OS is an AI-powered deal-closing platform designed for solo founders. It provides a dashboard-based web application to help entrepreneurs manage investor relations, pitch creation, meetings, and deal negotiations as if they had a full team. This project is built with pure HTML, CSS, and JavaScript, focusing on modern web standards and a clean, responsive SaaS-style user interface.

## Project Outline & Features

### 1. Core Structure & Layout
- **Multi-Page Layout:** A single-page application (SPA) feel where content is dynamically shown/hidden, managed by JavaScript.
- **Header:** Contains the application title "NexusFounder OS", the slogan, and a dark/light mode toggle.
- **Sidebar:** A fixed vertical navigation bar with links that control which page is displayed.
- **Main Content:** A container for different pages, like the Dashboard and Pitch Agent.

### 2. Pages & Widgets

#### A. Dashboard Page (`#dashboard-page`)
- **KPI Cards:** Key performance indicators for contacts, response rate, meetings, and pipeline value.
- **Agent Status:** Status of the four AI agents (Pitch, Outreach, Meeting, Deal).
- **Investor Pipeline Board:** A Kanban-style board for deal flow visualization.
- **Investor Recommendations:** A list of potential investors with fit scores.
- **Demo Section:** An interactive demo mode simulator with an AI log box.

#### B. Pitch Agent Page (`#pitch-agent-page`)
- **Input Form:** Text areas for users to input their `창업 아이디어` (Business Idea), `타깃 고객` (Target Audience), and `비즈니스 모델` (Business Model).
- **Generate Button:** A "피치 생성" (Generate Pitch) button to trigger the mock generation process.
- **Output Area:** A dedicated section (`#pitch-output`) where the generated pitch content is displayed. The content is structured into sections:
  - Problem
  - Solution
  - Market
  - Business Model
  - Ask

### 3. Interactive Features
- **Page Navigation:** Clicking sidebar links hides the current page and shows the selected one.
- **Theme Toggle:** A button to switch between light and dark modes, with the preference saved in `localStorage`.
- **Demo Mode:** A simulation of the AI agents' workflow on the dashboard.
- **Pitch Generation:** A mock pitch generation on the Pitch Agent page.

### 4. Design & Styling
- **Aesthetics:** A modern, clean, and professional SaaS dashboard design.
- **Responsiveness:** The layout adapts to different screen sizes.
- **Iconography:** Uses Font Awesome for clear and intuitive icons.

## Current Plan: Implement Pitch Agent Page

1.  **[Done] Create `blueprint.md`:** Document the project's purpose and features.
2.  **[Done] Implement Initial Dashboard:** Create the HTML structure, CSS styling, and initial JavaScript for the main dashboard.
3.  **[Next] Update `index.html`:** Add the new, hidden HTML structure for the Pitch Agent page and add IDs to page sections for JS control.
4.  **[Pending] Update `style.css`:** Add a `.hidden` utility class and styles for the new Pitch Agent page elements.
5.  **[Pending] Update `main.js`:** Implement the navigation logic to switch between pages and the mock pitch generation functionality.
