const express = require("express")
const router = express.Router()

// Mock data for administrators
const administrators = [
  { email: "admin@example.com", password: "admin123" },
  // Add more administrators if needed
]

// Login route
router.post("/login", (req, res) => {
  const { email, password } = req.body

  // Check if the user is an administrator
  const isAdmin = administrators.some((admin) => admin.email === email && admin.password === password)

  if (isAdmin) {
    // Redirect to the registration page
    res.redirect("/registrar")
  } else {
    // Display an error message or redirect to a different page
    res.send("Acesso negado. Você não é um administrador.")
  }
})

module.exports = router
