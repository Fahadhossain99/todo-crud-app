import { User } from "./db.js";

export async function register(name, email, password) {
  try {
    // Name validation
    if (!name.trim()) {
      console.log("Name cannot be empty");
      return null;
    }

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) {
      console.log("Name must contain only letters");
      return null;
    }

    // Email validation
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;

    if (!emailRegex.test(email)) {
      console.log(
        "Enter email in valid format (gmail.com, yahoo.com, outlook.com)",
      );
      return null;
    }

    // Password validation
    if (password.length < 4) {
      console.log("Password must be at least 4 characters");
      return null;
    }

    // Check duplicate email
    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      console.log("Email already exists");
      return null;
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
    });

    console.log("Registration successful!");
    return user;
  } catch (error) {
    console.log("Registration failed:", error.message);
    return null;
  }
}

export async function login(email, password) {
  try {
    if (!email.trim() || !password.trim()) {
      console.log("Email and password are required");
      return null;
    }

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      console.log("Invalid email or password");
      return null;
    }

    if (user.password !== password) {
      console.log("Wrong credential");
      return null;
    }

    console.log("Login successful!");
    return user;
  } catch (error) {
    console.log("Login failed:", error.message);
    return null;
  }
}
