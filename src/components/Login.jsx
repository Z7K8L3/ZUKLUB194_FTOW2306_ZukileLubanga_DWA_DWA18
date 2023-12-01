// import React, { useState } from "react";
// import { useHistory } from "react-router-dom"
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//     "https://hsvtdipfkwhmbrzzdrob.supabase.co",
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzdnRkaXBma3dobWJyenpkcm9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNDM2MzUsImV4cCI6MjAxNjkxOTYzNX0.ZdVzIO_MN6v4CrL10YPjE03NiKHLbi2-uZEVYQxqzks"
// );

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();

//   const handleLogin = async () => {
//     try {
//       const { user, error } = await supabase.auth.signIn({
//         email,
//         password,
//       });

//       if (error) {
//         console.error(error.message);
//       } else {
//         history.push("/body");
//         console.log("Logged in:", user);
//       }
//     } catch (error) {
//       console.error("Error signing in:", error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
