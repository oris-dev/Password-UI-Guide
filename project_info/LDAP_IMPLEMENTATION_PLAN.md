# LDAP Mock Implementation Plan

This document outlines the step-by-step plan for implementing a functional Mock Active Directory/LDAP server using `ldapjs`. 

## Phase 1: Environment & Scaffolding
- [ ] Initialize a new directory/package for the mock server (to keep it separate from the UI code).
- [ ] Install dependencies: `ldapjs`.
- [ ] Create a `config.js` or `constants.js` to store the Base DN (e.g., `dc=example,dc=com`) and port.

## Phase 2: Core Server Logic
- [ ] **Server Initialization**: Set up the `ldap.createServer()` instance.
- [ ] **Bind (Authentication) Handler**: Implement logic to verify Distinguished Names (DNs) and passwords against our mock database.
- [ ] **Search Handler**: Implement a filter-based search (supporting equality filters like `(uid=john)`).
- [ ] **Error Handling**: Ensure standard LDAP error codes (e.g., `InvalidCredentialsError`, `NoSuchObjectError`) are returned correctly.

## Phase 3: Data Structure (The Tree)
- [ ] Implement a JSON-based "Database" representing the Directory Information Tree (DIT).
- [ ] Support for **Organizational Units (OUs)** as containers.
- [ ] Support for **User Entries** with standard attributes (`cn`, `sn`, `mail`, `uid`).

## Phase 4: Customization (User Input Required)
*Fill in the sections below to define how the mock should behave.*

### 1. Base DN
Default: `dc=example,dc=com`
*Your value:* `dc=ori-corp,dc=com`

### 2. Organizational Units (OUs)
*Example: `ou=Users`, `ou=Groups`, `ou=Development`*
*List yours:*
- `ou=Central`
- `ou=North`
- `ou=Hasharon`
- `ou=South`

### 3. Roles & Groups
*Define the groups and which attributes distinguish them (e.g., `memberOf`).*
*Define roles:*
- `citrix-helpdesk`
- `citrix-doctors`
- `citrix-admin`
- `citrix-clerk`


### 4. Mock Users
*Define a few initial users for testing.*
| OU | UID/Username | Role/Group | Full-Name |  Password | Phone-Number | 
| :--- | :--- | :--- | :--- |
| Hasharon | oriki | citrix-admin | Ori Sadowsky | Ori!3491@ | 0509733820 |
| Central | anton | citrix-doctors | Anton Tony Ankoneko | goAnton512! | 13213941 |
| | | | |

## Phase 5: Testing & Validation
- [ ] Create a `client-test.js` to simulate a login.
- [ ] Create a `search-test.js` to verify attribute retrieval.
- [ ] Document the commands needed to run and test the server.

---

## Instructions for Execution
Once you have filled out the **Phase 4: Customization** section, tell me "The plan is ready" and I will proceed with the implementation based on your specifications.
