
  The "Keystroke Journey" (How it works in practice)

   1. The Action: You type the letter "S" into the PasswordInput.
   2. The Signal: The input doesn't decide what to do. It just sends a signal (an Action) to the Redux Brain:
      "Hey, the user added an 'S'!"
   3. The Calculation: Redux looks at its "Rule Book." It sees the password is now 10 characters long and has a
      symbol. It updates the State to: Strength: 4 (Secure).
   4. The Update: React sees that the Redux Brain has changed.
       * The Input sees Strength: 4 and turns Success Green.
       * The Feedback sees the new state and displays: "סיסמה חזקה מאוד!" (Very strong password!).
       * The Keyboard sees that the symbol rule is met and stops the "Invite" glow.