# Project: Password-UI-Guide

## Project Goals
- Create an informative "Password Coach" interface for non-technical users.
- Focus on memorability, ease of use, and educational feedback.
- RTL (Right-to-Left) layout support for Hebrew is a core requirement.

## Tech Stack
- **Next.js** (App Router).
- **React** (Vanilla Javascript).
- **Redux Toolkit** (for global state management).
- **Vanilla CSS** (CSS Modules for styling).

## UI/UX Principles
- **RTL First**: All UI components must be designed for RTL (`dir="rtl"`).
- **Visual Language**: State-based color system (Neutral -> Warm Yellow -> Success Green) for password strength.
- **Coach Interface**: Real-time feedback instead of static validation.
- **Keyboard Visualizer**: Interactive component that highlights keys based on user input.

## Coding Standards
- Prefer functional components and hooks.
- Keep components modular and focused.
- Prioritize accessibility and clear, conversational Hebrew messaging.
- Use explicit types for state management and algorithm rules.

## Directory Structure
- `/src/components/`: UI components (Coach, Keyboard, Input).
- `/src/hooks/`: Logic for password checking and state.
- `/src/styles/`: Global styles and custom CSS variables for the visual language.
- `/src/utils/`: Helper functions and Hebrew message constants.
