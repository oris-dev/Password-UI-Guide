# Password-UI-Guide

## Heigher reasoning

secrertaries have a hard time reseting their passwords and logging in
to their computers, it takes us a lot of time and effort to help them log in. I am looking to make that process easier and more planned towards them,
based on their needs and technical understanding.

They don't understand english very well.
They get confused with symbols easily.
They need to see constant visual feedback to know if what they are writing is correct, and what can they do to fix it.

I want to make it easily accessable, readable and managable without any technical knowledge or english knowledge.
I don't want to use a lot of resources into this, meaning there is no need to overcomplicate things - make sure I create something simple and low resource, so it won't be hard to manage or will take too much computing power from our servers.

# What am I trying to solve here

1. Users trying to log in, having complications with their passwords, missing things like numbers, characters in different languages or just missing a note. 

2. Users trying to reset their password having a hard time understanding password rules, wasting a lot of time and calling us very frequently.

3. Minimize the amount of calls and requests we recieve about this. 

# What am I trying to create

1. Easier, more friendly to access UI for logging in into both citrix and Priority/

2. Simplify the users process of resetting a password, creating a smoother reset exprience, creating clear, easy to understand hebrew instructions. 

# Supposed to be used when:

1. When logging in to citrix and priority

2. When resetting a password, wether if clicking manually on one of the log in pages or when a user must reset its password cause its been 180 days since updating the password



## LEVEL 1

* upgrading html page for resetting passwords 
* making a more personalized UI based on the organizations users needs
* making the password rules visable and easy to understand
* change the reset password page to hebrew 


# Missions to accomplish:

1. create a mock ad using ldapjs and create a mock database for users and permissions

2. Recreate user flow to the following:

* start on a password reset page: requiring a username
* send an sms message to the users phone, creating an OTP to start resetting the password
* after writing the code, enter a reset password page(what I created here) and add another input text line to make sure it works

# Level 2
* upgrade login page, adding a show password feature
* also adding an alert when writing in hebrew 