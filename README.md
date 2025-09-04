# Study Break Reminder API

A simple API that provides randomized study break reminders to help students stay healthy and productive while studying.

# Features
- Returns random reminders such as stretching, hydration, relaxation, or miscellaneous activities.
- Supports query parameter `type` to filter reminders (`stretch`, `hydrate`, `relax`, `misc`).

# Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/study-break-reminder-api.git

# Example:
    1. GET http://localhost:3000/reminders
    2. [
  {
    "id": "1",
    "title": "Pomodoro break",
    "description": "Work 25 minutes then take 5 minutes break",
    "intervalMinutes": 25,
    "active": true,
    "createdAt": "2025-09-04T02:00:00.000Z"
  }
]



