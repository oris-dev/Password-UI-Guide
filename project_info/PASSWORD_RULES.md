# Password Checker Rules & Coaching Messages

This document defines the validation rules for the Password Coach. Instead of traditional error messages, the UI uses a **Rule Elimination** strategy where all requirements are shown upfront and "disappear" as they are satisfied.

## Active Rule Set

### 1. Minimum Length
- **Requirement**: At least 10 characters.
- **Display Message**: "הוסיפו עוד כמה תווים (לפחות 10)"

### 2. Uppercase Letter
- **Requirement**: At least one capital letter (A-Z).
- **Display Message**: "שלבו אות גדולה (A-Z)"

### 3. Lowercase Letter
- **Requirement**: At least one small letter (a-z).
- **Display Message**: "שלבו אות קטנה (a-z)"

### 4. Special Characters
- **Requirement**: At least one symbol (e.g., @, #, !).
- **Display Message**: "הוסיפו סימן מיוחד (כמו @, #, או !)"

### 5. Sequence Blocking (Safety Rule)
- **Requirement**: No simple sequences (e.g., '123', 'abc').
- **Display Message**: "הסירו רצפים פשוטים (כמו 123)"
- *Note: This rule only appears if a sequence is detected.*

### 6. English Only (Critical Blocker)
- **Requirement**: No Hebrew characters allowed.
- **Display Message**: "כתבו באותיות באנגלית בלבד"
- *Note: This rule only appears if Hebrew is detected.*

---

## Visual Language: The Journey to "Zero"
The user's goal is to clear the feedback panel.
- **Initial State**: All 4 primary rules (Length, Upper, Lower, Symbol) are visible.
- **Progress**: As rules are met, they are removed from the list.
- **Success**: An empty list (or a final "Success" message) indicates the password is ready.
