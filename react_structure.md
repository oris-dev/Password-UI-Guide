# React Architecture: Password Coach

This document details the technical structure and data flow of the Password Coach React application.

## Architecture Overview: The Single-Page Coach
We use a **Surgical Single-Page Architecture**. The interface is a focused, high-immediacy workspace where all components react in real-time to user input without page transitions.

## State Management: The "Brain" Hook
State is centralized using a custom hook to ensure a single source of truth and decoupled logic.

### `usePasswordCoach` (Custom Hook)
- **Location**: `src/hooks/usePasswordCoach.js`
- **Responsibilities**:
  - Manages the `password` string state.
  - Calculates `strength` (0-4) based on security rules.
  - Generates an array of `feedback` messages in Hebrew.
  - Tracks `activeKeys` for the visualizer.
- **Why?**: This allows the logic to be tested independently of the UI and keeps components "pure."

## Component Hierarchy
The application follows a strict parent-to-child data flow:

1.  **`App.js` (The Orchestrator)**:
    - Calls `usePasswordCoach()`.
    - Distributes state and setter functions to children via props.
    - Sets the global `dir="rtl"` and applies theme-level CSS classes.

2.  **`PasswordInput.jsx` (The Driver)**:
    - Renders a large, stylized input field.
    - Captures keystrokes and updates the `password` state.
    - Displays visual state (e.g., border color) based on the `strength` prop.

3.  **`CoachFeedback.jsx` (The Teacher)**:
    - Receives the `feedback` array.
    - Maps through messages to display real-time tips in Hebrew.
    - Uses state-based coloring (e.g., Yellow for warnings, Green for success).

4.  **`KeyboardVisualizer.jsx` (The Tactile Layer)**:
    - A visual representation of a keyboard.
    - Highlights keys dynamically based on the current `password` or active keystrokes.

## Data Flow (Unidirectional)
1.  **User Action**: User types "a" in `PasswordInput`.
2.  **State Update**: `setPassword("a")` is called.
3.  **Re-render**: React detects state change.
4.  **Logic Execution**: `usePasswordCoach` recalculates strength and messages.
5.  **UI Sync**: `App` passes new props; `CoachFeedback` shows "Password too short", `PasswordInput` turns red.

## Design System Integration
Components consume the CSS variables defined in `DESIGN_SYSTEM.md`. We map React state to CSS data-attributes:

```jsx
// Example of state-to-style mapping
<div className="coach-app" data-strength={strength}>
  {/* The CSS uses [data-strength="3"] to set --accent-color */}
</div>
```

## RTL Strategy
- Root element has `dir="rtl"`.
- Typography uses the "Ploni-dl" font preset.
- Layout uses Flexbox and Grid with logical properties to ensure correct Hebrew alignment.
