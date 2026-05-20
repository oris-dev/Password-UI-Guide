# Migration Plan: Mock LDAP to Next.js API Route

This plan outlines how to move our mock LDAP logic into a Vercel-compatible Next.js API route.

## Phase 1: Create the API Route
- [ ] Create the directory structure: `app/api/auth/ldap/`.
- [ ] Create `route.js` inside that folder.
- [ ] Port the `db` object (users, OUs, roles) from `ldap-mock/server.js`.
- [ ] Port the **Normalization Logic** (removing spaces/lowercase) to handle incoming usernames.

## Phase 2: Implementation Details
- [ ] **POST Handler**: Implement a `POST` function to receive `username` (as DN) and `password`.
- [ ] **Authentication Check**: Use the ported logic to verify credentials.
- [ ] **Response format**: Return a JSON object with `success: true/false`, the user's details, and a success/error message.

## Phase 3: Integration (Frontend)
- [ ] Identify where the login call happens in the React components.
- [ ] Update the call to use `fetch('/api/auth/ldap')` instead of trying to use an LDAP client.

## Phase 4: Cleanup
- [ ] Delete the `ldap-mock/` directory.
- [ ] (Optional) Remove `ldapjs` from any global dependencies if installed.

---

## Why this change?
- **Vercel Compatibility**: Next.js API routes are serverless functions. They run perfectly on Vercel.
- **Protocol Shift**: We are moving from **LDAP (TCP)** to **REST (HTTP)**. This is much easier for web browsers to handle directly.
- **Simplicity**: You no longer need to manage a separate "Server" process; your website handles its own authentication logic.
