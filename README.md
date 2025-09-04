# Study Break Reminder API

A simple API that provides randomized study break reminders to help students stay healthy and productive while studying, improving focus, reducing fatigue, and promoting better learning outcomes.

# Features
- Returns random reminders such as stretching, hydration, relaxation, or miscellaneous activities.
- Supports query parameter `type` to filter reminders (`stretch`, `hydrate`, `relax`, `misc`).
- Supports query parameter interval to send reminders at customizable time intervals (e.g., every 30 minutes, 1 hour, etc.).
Smart scheduling – reminders only trigger during defined study hours (e.g., 9 AM – 6 PM).
Snooze option – temporarily delay a reminder if the user is in the middle of something.
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



