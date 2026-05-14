# Keyboard Visualizer Concept: The "Magnetic Glow"

The "Magnetic Glow" is the core interactive feature of our Password Coach UI. It transforms the static keyboard into a proactive teaching tool that guides users toward creating stronger, more secure passwords without feeling like a traditional security form.

## Concept Overview
Instead of waiting for the user to make a mistake, the keyboard acts as a "magnetic" guide. It subtly pulls the user's attention toward helpful symbols and characters while warning against common weak patterns. 

**Note**: This component is optimized for Desktop (PC/Laptop) usage as part of an Active Directory password reset mockup.

## Bulk Input & Edge Cases
- **Pasting**: When a password is pasted, the keyboard will momentarily "flash" the characters that satisfy complex rules (symbols/caps) to validate the input's strength visually.
- **Deletion**: Clearing the input resets all key states to Neutral. Deleting a single character updates the "Avoid" and "Invite" pulses based on the new trailing character.


## Interaction States

### 1. The "Invite" (Proactive Guidance)
- **Trigger**: User focuses on the password input field.
- **Behavior**: Keys that satisfy the "Special Symbol" and "Complexity" rules pulse with a soft, warm yellow glow.
- **Goal**: To invite the user to use these characters, making them feel like a natural choice.

### 2. The "Confirmation" (Positive Reinforcement)
- **Trigger**: User types a character that contributes to a stronger password.
- **Behavior**: The key shifts from a pulsing yellow to a solid, welcoming "Success Green."
- **Goal**: Immediate, satisfying visual feedback that the user is on the right track.

### 3. The "Avoid" (Preventive Warning)
- **Trigger**: User attempts to type a simple sequence (e.g., '1' followed by '2').
- **Behavior**: The next keys in the weak sequence (e.g., '3') glow with a soft, alert red.
- **Goal**: To gently discourage weak patterns *before* they are committed to the password field.

## Visual Language & RTL Integration
- **Glow Effect**: Achieved using CSS `box-shadow` or `radial-gradient` transitions to ensure the glow feels organic and "magnetic."
- **RTL Alignment**: The keyboard layout container uses `dir="rtl"` to ensure any legends or descriptive labels remain correctly aligned for Hebrew users, while the physical QWERTY key grid remains intuitive.
- **Color Palette**:
    - **Neutral**: Gray (inactive)
    - **Invite**: Warm Yellow (#ffd43b)
    - **Confirmation**: Success Green (#51cf66)
    - **Avoid**: Soft Red (#ff8a8a)

## Implementation Plan
1. **Layout**: Map the physical keyboard layout to a standard grid.
2. **State Management**: React state will track the "last typed" character and the current "strength" of the password to determine which keys receive which "glow" state.
3. **Animations**: Use CSS keyframes for the pulsing animation to ensure the interface feels "alive."
