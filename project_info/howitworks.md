
## The "Keystroke Journey" (How it works in practice)

1.  **Initial Launch**: When the website loads, the **Coach Feedback** panel displays a complete list of all the required password rules. This gives the user a clear "roadmap" of what is needed (e.g., 10+ characters, special symbols, mixed case).
2.  **The Action**: The user starts typing in the **PasswordInput**.
3.  **The Signal**: Every keystroke sends a signal (an Action) to the Redux store with the updated password string.
4.  **The Calculation & Elimination**: The Redux logic continuously checks the password against the "Rule Book."
    *   As soon as a rule is satisfied (e.g., the user adds a symbol), that rule is **immediately removed** from the visual list.
    *   The UI updates the password strength and colors in real-time.
5.  **The Final Destination**: The user's journey is complete when the rule list is **empty**. This "zero-state" confirms that the password is fully secure and ready to use.

## Data Flow Architecture

The project follows a strict Unidirectional Data Flow to ensure the UI stays in sync:

1.  **Action**: User interacts with the `PasswordInput`.
2.  **Dispatch**: The input dispatches the new password to the Redux store (`setPassword`).
3.  **Calculation**: Redux evaluates which rules are still "active" and which have been met. It also calculates the overall strength and determines which keyboard keys should "glow" to guide the user.
4.  **Reaction**: The `CoachFeedback` and `KeyboardVisualizer` components subscribe to the state.
    *   **CoachFeedback**: Re-renders to remove satisfied rules from the list.
    *   **KeyboardVisualizer**: Updates the visual cues on the keys based on the remaining rules.
