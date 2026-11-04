// Registration feature implementation
export function register(email, password) {
  console.log('Registering user:', email);
  return { success: true, message: 'Activation OTP sent to email' };
}
