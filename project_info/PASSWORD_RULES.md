# Password Checker Rules & Coaching Messages

This document defines the validation rules for the Password Coach and the corresponding friendly Hebrew messages used to guide non-technical users.

## Rule Definitions

### 1. Minimum Length
- **Requirement**: Password must be at least 10 characters long.
- **Coach Message**: "כדאי להוסיף עוד כמה תווים, זה יהפוך את הסיסמה לבטוחה הרבה יותר (לפחות 10)."
- **Severity**: Critical (Color: #ff8a8a)

### 2. Character Case
- **Requirement**: Must include at least one uppercase letter and one lowercase letter.
- **Coach Message**: "שילוב של אותיות גדולות וקטנות מחזק את הסיסמה."
- **Severity**: Warning (Color: #ffd43b)

### 3. Special Characters
- **Requirement**: Must include at least one symbol from the keyboard.
- **Coach Message**: "הוספת סימן מיוחד (כמו @, #, או !) מוסיפה המון הגנה."
- **Severity**: Warning (Color: #ffd43b)

### 4. Sequence Blocking
- **Requirement**: Cannot contain simple number sequences like '123' or '321'.
- **Coach Message**: "כדאי להימנע מרצפים פשוטים של מספרים כמו 123 - זה הופך את הסיסמה לקלה לניחוש."
- **Severity**: Warning (Color: #ff8a8a)

### 5. No Hebrew Characters
- **Requirement**: Password must be written in English characters only.
- **Coach Message**: "הסיסמה צריכה להיכתב באותיות באנגלית בלבד. (נא לוודא שהמקלדת באנגלית)"
- **Severity**: Critical (Color: #ff8a8a)

---

## Unit Testing Plan (Vitest/Jest)
To ensure the Active Directory logic is foolproof, the following test cases must be implemented in `src/hooks/usePasswordCoach.test.js`:

1. **Length Validation**: Confirm strength is 0 for < 10 chars, and increases at 10+.
2. **Case Sensitivity**: Verify strength boost only when *both* upper and lower case are present.
3. **Symbol Recognition**: Test with various special characters (!, @, #, $, %, ^).
4. **Sequence Blocking**: 
    - Input '123' -> Ensure sequence rule is triggered.
    - Input 'abc' -> Ensure sequence rule is triggered.
5. **Bulk Operations**: Verify that pasting a valid strong password correctly calculates all 4 strength levels in one cycle.

## Visual Language Implementation
- **Neutral (Gray)**: Default state before typing.
- **Attention (Soft Red)**: Used when a rule is violated or not yet met.
- **Progress (Warm Yellow)**: Used when the user is actively meeting requirements.
- **Secure (Success Green)**: Used when all requirements are fully met.
