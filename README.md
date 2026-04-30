# Password-UI-Guide

## How it works

1. Create a few algorithms for password generation so it will be easy to remember and create passwords.

2. An algorithm is randomly chosen, using a random password generator button.

3. The user can change or edit the password as they please after generation.

4. Each algorithm has its own unique set of rules and logic.



## UI Elements and Unqiue interactions:

1. when hovering on a symbol like: '!,@,#' it will show a keyboard layout with the symbol highlighted.

2. Unique and easy error messages for the users to understand, in plain hebrew.

3. Have unique colors to each error.



## Algorithms:

1. Algorithm 1:
  - Generate random common, low-level english words, like 'banana', 'apple', 'orange'.
  - randomize at least one big letter in the word.
  - generate a random number between 1-10000
  - make sure the number has at least half of its chars are unqiue 
  - randomize a symbol from the following : !,@,#, and use between 1-3 symbols randomly, not using more than 2 of the same symbol.

  Examples: Dog5123@!!, cAt5912##!

    more options for this algorithm is to radmoize the order of the word, number and symbol. 

    for example: 5123@!!Dog, 912##!cAt

2. Algorithm 2: The "Rhyme & Reason"
    Rhymes are incredibly sticky in human memory. This algorithm uses rhyming pairs combined with structural complexity.

    Rules:

    Generate a random pair of common English rhyming words (e.g., "moon"/"spoon", "cat"/"hat", "light"/"night").
    Capitalize the first letter of the first word, and the last letter of the second word.
    Generate a random 4-digit number.
    Insert the number perfectly in the middle, between the two rhyming words.
    Wrap the entire password in matching symbols (e.g., (...), [...], !...! or ?...?).

    Examples:

    !Moon4591spooN!
    (Cat8214haT)
    ?Light9001nighT?