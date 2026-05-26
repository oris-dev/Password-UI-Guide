async function testLDAPRoute() {
  const url = 'http://localhost:3000/api/auth/ldap';
  
  const testCases = [
    {
      name: 'Valid Login (Oriki)',
      expectedSuccess: true,
      body: {
        username: 'uid=oriki, ou=Hasharon, dc=ori-corp, dc=com',
        password: 'Ori!3491@'
      }
    },
    {
      name: 'Valid Login (Anton)',
      expectedSuccess: true,
      body: {
        username: 'uid=anton,ou=Central,dc=ori-corp,dc=com',
        password: 'goAnton512!'
      }
    },
    {
      name: 'Invalid Password',
      expectedSuccess: false,
      body: {
        username: 'uid=oriki, ou=Hasharon, dc=ori-corp, dc=com',
        password: 'wrong-password'
      }
    },
    {
      name: 'Non-existent User',
      expectedSuccess: false,
      body: {
        username: 'uid=nobody, ou=Nowhere, dc=ori-corp, dc=com',
        password: 'password'
      }
    }
  ];

  console.log('--- Starting API Route Tests ---\n');

  for (const test of testCases) {
    try {
      console.log(`Running Test: ${test.name}...`);
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(test.body)
      });

      const result = await response.json();
      
      const isActuallySuccessful = response.ok && result.success;

      if (isActuallySuccessful === test.expectedSuccess) {
        console.log(`✅ PASS: ${test.expectedSuccess ? 'Authentication successful' : 'Correctly rejected invalid credentials'}.`);
        if (isActuallySuccessful) {
          console.log('   User:', result.user.cn);
        } else {
          console.log('   Error Message:', result.message);
        }
      } else {
        console.log(`❌ FAIL: Expected ${test.expectedSuccess ? 'success' : 'failure'}, but got ${isActuallySuccessful ? 'success' : 'failure'}.`);
        console.log(`   Response Message: ${result.message || 'No message'}`);
      }
    } catch (error) {
      console.log(`⚠️ ERROR: Could not connect to the server. Is "npm run dev" running?`);
      break;
    }
    console.log('----------------------------\n');
  }
}

testLDAPRoute();
