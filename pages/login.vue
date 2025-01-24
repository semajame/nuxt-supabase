<script setup>
const supabase = useSupabaseClient()

const email = useState('email', () => '')
const password = useState('password', () => '')
const error = useState('error', () => '')

const handleLogin = async () => {
  try {
    const { user, error: loginError } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (loginError) {
      error.value = loginError.message
    } else {
      navigateTo('/')
    }
  } catch (err) {
    console.error('Login error:', err)
    error.value = 'An unexpected error occurred.'
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>
