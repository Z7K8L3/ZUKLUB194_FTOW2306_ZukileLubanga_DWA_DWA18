//     const [formData, setFormData] = useState({
//         fullname: "", email: "",  password: ""
//     })

//     function handleChange(event) {
//         setFormData((prevFormData) => {
//             return{
//                 ...prevFormData,
//                 [event.target.name]:event.target.value
//             }
//         })
//     }
// async function handleSubmit() {
// try {
//     const { data, error } = await supabase.auth.signUp(
//         {
//           email: formData.email,
//           password: formData.password,
//           options: {
//             data: {
//               full_name: formData.fullname,
//             }
//           }
//         }
//       )
// } catch (error) {
//     alert(error)
// }
//     }

    
    {/* <form onSubmit={handleSubmit}>
            <input 
            placeholder="Fullname"
            name="fullName"
            onChange={handleChange}
            />
            <input 
            placeholder="Email"
            name="email"
            onChange={handleChange}
            />
            <input 
            placeholder="Password"
            name="password"
            onChange={handleChange}
            />

            <button type="submit">
                <Submit></Submit>
            </button>
        </form> */}