const baseDN = 'dc=ori-corp,dc=com';
const domain = 'ori-corp.com';

// Ported Mock Database
const db = {
  [`uid=oriki,ou=Hasharon,${baseDN}`]: {
    uid: 'oriki',
    cn: 'Ori Sadowsky',
    userPassword: 'Ori!3491@',
    mail: `oriki@${domain}`,
    telephoneNumber: '0509733820',
    memberOf: [`cn=citrix-admin,ou=Groups,${baseDN}`]
  },
  [`uid=anton,ou=Central,${baseDN}`]: {
    uid: 'anton',
    cn: 'Anton Tony Ankoneko',
    userPassword: 'goAnton512!',
    mail: `anton@${domain}`,
    telephoneNumber: '13213941',
    memberOf: [`cn=citrix-doctors,ou=Groups,${baseDN}`]
  }
};

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Normalization logic (same as our LDAP server)
    const normalizedInput = username.toLowerCase().replace(/\s+/g, '');

    const entryKey = Object.keys(db).find(
      (key) => key.toLowerCase().replace(/\s+/g, '') === normalizedInput
    );

    const user = db[entryKey];

    if (user && user.userPassword === password) {
      // Remove password before sending user data back
      const { userPassword, ...safeUserData } = user;
      
      return new Response(JSON.stringify({
        success: true,
        user: { dn: entryKey, ...safeUserData }
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      success: false,
      message: 'Invalid Distinguished Name or password'
    }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: 'Invalid request' }), {
      status: 400,
    });
  }
}
