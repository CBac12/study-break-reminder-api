# Study Break Reminder API

A simple API that provides study break reminders to help students stay healthy and productive while studying, improving focus, reducing fatigue, and promoting better learning outcomes.

# Features
- Supports query parameter `type` to filter reminders (`stretch`, `hydrate`, `relax`, `misc`).
- Supports query parameter interval to send reminders at customizable time intervals (e.g., every 30 minutes, 1 hour, etc.).
-Smart scheduling – reminders only trigger during defined study hours (e.g., 9 AM – 6 PM).
-Snooze option – temporarily delay a reminder if the user is in the middle of something.

# Installation
1. Install Node.js from the web.
2. "ADD TO PATH" method for installing Node.js automatically binds the extensions to other applications like VSCode.
3. Administrator Windows Powershell will automatically show up after the installation of Node.js, ensuring complete extensions/packages from the application when using various coding app platforms.
4. In VSCode or other code platforms, using different commands from Node.js can be implemented in terminals/bash.

# Example:
   1. Using terminals/bash in VSCode, input "npm run dev".Therefore, the program will provide the local host address.
   2. Input the local host address using web browsers.
   3. Open POSTMAN using the GET method.
   4. Copy the local host address together with the JSON file (http://localhost:3000/reminders/<id>).
   5. Send the request using the GET method.
   6. The user will receive a response based on the code within the JavaScript.
   RESPONSE:
        {
    "id": "1",
    "reminder 1": "Pomodoro break",
    "description": "Work 25 min then 5 min break",
    "intervalMinutes": 25
  }
   
   
   
    



