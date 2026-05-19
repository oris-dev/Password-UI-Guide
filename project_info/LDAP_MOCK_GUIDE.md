# Mocking Active Directory with ldapjs

This guide explains how to set up a mock LDAP server (like Active Directory) using `ldapjs`. If you are coming from a SQL background, LDAP might feel a bit strange at first, but the concepts are very similar once you translate them.

## 1. LDAP vs. SQL: The Mental Bridge

Think of LDAP as a **Tree** instead of a set of **Tables**.

| SQL Concept | LDAP Equivalent | Description |
| :--- | :--- | :--- |
| **Database** | **DIT** (Directory Information Tree) | The entire tree structure. |
| **Table** | **OU** (Organizational Unit) | A folder-like container for entries. |
| **Row** | **Entry** | A specific object (like a User or Group). |
| **Column** | **Attribute** | A property of the entry (e.g., `sn` for Surname). |
| **Primary Key** | **DN** (Distinguished Name) | The absolute path to the entry (like a file path). |

### Example of a DN (Distinguished Name)
In SQL, you find a user by `WHERE id = 5`. 
In LDAP, you find them by their full path:
`cn=John Doe,ou=Users,dc=example,dc=com`
*(Read this from left to right: Common Name "John Doe", inside Organizational Unit "Users", inside Domain Components "example.com")*

---

## 2. Basic Setup

First, initialize your project and install `ldapjs`:

```bash
npm init -y
npm install ldapjs
```

---

## 3. Creating a Simple Mock Server

Create a file named `mock-ad.js`. This script will act as your "Database Server".

```javascript
const ldap = require('ldapjs');

const server = ldap.createServer();

// 1. Mock Data (Our "Tables")
const db = {
  'cn=admin,dc=example,dc=com': {
    dn: 'cn=admin,dc=example,dc=com',
    attributes: {
      objectclass: ['top', 'person', 'organizationalPerson', 'user'],
      cn: 'admin',
      sn: 'Administrator',
      userPassword: 'password123'
    }
  }
};

// 2. Handle Bind (Login) Requests
server.bind('dc=example,dc=com', (req, res, next) => {
  const dn = req.dn.toString();
  const password = req.credentials;

  console.log(`Login attempt for: ${dn}`);

  if (db[dn] && db[dn].attributes.userPassword === password) {
    res.end();
    return next();
  }

  return next(new ldap.InvalidCredentialsError());
});

// 3. Handle Search Requests
server.search('dc=example,dc=com', (req, res, next) => {
  console.log(`Searching for: ${req.filter.toString()}`);

  Object.values(db).forEach(entry => {
    if (req.filter.matches(entry.attributes)) {
      res.send(entry);
    }
  });

  res.end();
  return next();
});

// 4. Start the Server
server.listen(1389, '127.0.0.1', () => {
  console.log('Mock AD server listening at: ' + server.url);
});
```

---

## 4. How to Test It

You can test your mock server using the command line (if you have LDAP tools installed) or by writing a small client script.

### Using a Client Script (`test-client.js`)
```javascript
const ldap = require('ldapjs');
const client = ldap.createClient({ url: 'ldap://127.0.0.1:1389' });

client.bind('cn=admin,dc=example,dc=com', 'password123', (err) => {
  if (err) {
    console.error('Login Failed!', err);
  } else {
    console.log('Login Successful!');
  }
  client.unbind();
});
```

## 5. Key Takeaways for SQL Developers

1. **No Fixed Schema**: Unlike SQL where every row in a table must have the same columns, LDAP entries can have different attributes depending on their `objectclass`.
2. **Read Heavy**: LDAP is optimized for searching (reading) very quickly, but it is slower than SQL for frequent writes.
3. **Hierarchy Matters**: Where you place a user in the tree (`ou=Sales` vs `ou=Engineering`) often determines their permissions or group memberships.
