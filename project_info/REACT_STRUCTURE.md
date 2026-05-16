# React & Redux Architecture: Password Coach

This document details the technical structure using **Next.js (App Router)** and **Redux Toolkit**.

## Architecture Overview: The Next.js App Router
We use the **App Router** pattern (`/app` directory). The application is split into Server Components for static layout and Client Components for the interactive "Coach" experience.

## State Management: Redux Toolkit (The Global Brain)
Instead of a local hook, we use a centralized Redux store to manage the password lifecycle. This allows the keyboard, input, and feedback components to stay perfectly synced without prop drilling.

### Store Slice: `passwordSlice.js`
- **Location**: `src/lib/features/password/passwordSlice.js`
- **State**:
  - `value`: The current password string.
  - `strength`: Calculated value (0-4).
  - `feedback`: Array of Hebrew message strings.
  - `activeKeys`: Map of keys to highlight (Neutral, Invite, Confirmation, Avoid).
- **Reducers**:
  - `setPassword`: Updates value and triggers re-calculation of strength/feedback.
  - `resetStore`: Clears all state.

## Component Hierarchy (Next.js)

1.  **`app/layout.js` (The Root)**:
    - Wraps the entire app in a **Redux Store Provider**.
    - Sets global `dir="rtl"` and handles the "Ploni-dl" font via `next/font`.

2.  **`app/page.js` (The Orchestrator)**:
    - A Server Component that serves as the main entry point.
    - Imports the interactive Client Components.

3.  **`src/components/PasswordInput.jsx`** (`'use client'`):
    - Connects to Redux via `useSelector` and `useDispatch`.
    - Dispatches `setPassword` on every `onChange` (handling typing, paste, and delete).
    - Includes the **Show/Hide Toggle**.

4.  **`src/components/CoachFeedback.jsx`** (`'use client'`):
    - Subscribes to the `feedback` and `strength` states from Redux.
    - Uses `aria-live="polite"` for accessibility.

5.  **`src/components/KeyboardVisualizer.jsx`** (`'use client'`):
    - Subscribes to `activeKeys` and `lastTypedChar`.
    - Renders the "Magnetic Glow" grid.

## Data Flow (Redux + Next.js)
1.  **Action**: User types in `PasswordInput`.
2.  **Dispatch**: `dispatch(setPassword("newVal"))` is called.
3.  **Reducer**: Redux updates the store and runs the validation logic (defined in `PASSWORD_RULES.md`).
4.  **Subscribe**: All three components (`Input`, `Feedback`, `Keyboard`) receive the new state and re-render instantly.

## Design System Integration
We use **CSS Modules** (`Component.module.css`) to ensure styles are scoped.
