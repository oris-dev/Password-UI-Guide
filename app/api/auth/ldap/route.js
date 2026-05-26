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
    const { username, password, mode } = await request.json();

    // Normalization logic (same as our LDAP server)
    const normalizedInput = username.toLowerCase().replace(/\s+/g, '');

    // Improved lookup: check both the full DN (key) AND the uid property
    const entryKey = Object.keys(db).find((key) => {
      const normalizedKey = key.toLowerCase().replace(/\s+/g, '');
      const user = db[key];
      const normalizedUid = user.uid.toLowerCase().replace(/\s+/g, '');
      
      return normalizedKey === normalizedInput || normalizedUid === normalizedInput;
    });

    const user = db[entryKey];

    if (!user) {
      return new Response(JSON.stringify({
        success: false,
        message: 'משתמש לא נמצא במערכת'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Search mode: just check if user exists and return non-sensitive data
    if (mode === 'search') {
      const { userPassword, ...safeUserData } = user;
      return new Response(JSON.stringify({
        success: true,
        user: { dn: entryKey, ...safeUserData }
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (user.userPassword === password) {
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
      message: 'סיסמה שגויה'
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
