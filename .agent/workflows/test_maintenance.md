---
description: How to test the Maintenance Mode feature
---

# Testing Maintenance Mode

To verify that the Maintenance Mode works as expected, follow these steps:

1.  **Stop the running development server** (if active).
2.  **Set the Environment Variable**:
    - **PowerShell**: `$env:VITE_MAINTENANCE_MODE="true"`
    - **CMD**: `set VITE_MAINTENANCE_MODE=true`
    - **Git Bash**: `export VITE_MAINTENANCE_MODE=true`
    - OR create a `.env.local` file in the project root with `VITE_MAINTENANCE_MODE=true`.
3.  **Start the server**:
    - Run `npm run dev`.
4.  **Verify**:
    - Open the application in your browser.
    - You should see the "System Maintenance" screen instead of the website.
5.  **Disable**:
    - Remove the env var or set it to `false`.
    - Restart the server.
    - The website should load normally.
