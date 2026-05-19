
 ## The "Keystroke Journey" (How it works in practice)

   1. The Action: You type the letter "S" into the PasswordInput.
   2. The Signal: The input doesn't decide what to do. It just sends a signal (an Action) to the Redux Brain:
      "Hey, the user added an 'S'!"
   3. The Calculation: Redux looks at its "Rule Book." It sees the password is now 10 characters long and has a
      symbol. It updates the State to: Strength: 4 (Secure).
   4. The Update: React sees that the Redux Brain has changed.
       * The Input sees Strength: 4 and turns Success Green.
       * The Feedback sees the new state and displays: "סיסמה חזקה מאוד!" (Very strong password!).

  ## Data Flow Architecture
  The project uses a Unidirectional Data Flow:

   1. Action: User types a letter in PasswordInput.
   2. Dispatch: The input sends the new string to the Redux Brain (setPassword).
   3. Calculation: Redux updates the state. It determines if the password is now "Strong".
   4. Reaction: The CoachFeedback component "listens" to the state change and re-render instantly with the new visuals.