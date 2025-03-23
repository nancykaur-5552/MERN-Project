// import React,{useState} from 'react'

// const userProfile = () => {
//     const [isAutenticated, setIsAuthenticated] = useState(false);
//     const [user, setUser] = useState({name: "", profilePic:""});

//     const handleCreateAccount = ()=>{
//         const name = prompt("Enter your name: ");
//         if(!name) return;

//         const input = document.createElement("input");
//         input.type = "file";
//         input.accept = "image/*";
//         input.onchange = (event) =>{
//             const file = event.target.files[0];
//             if(file){
//                 const imageUrl = URL.createObjectURL(file);
//                 setUser({name, profilePic: imageUrl});
//                 setIsAuthenticated(true);
//             }
//         };
//     input.click();
//     };
    
//     const handleLogOut=()=>{
//         setUser({name: "", profilePic: ""});
//         setIsAuthenticated(false);
//     };
//   return (
//     <>
//     {setIsAuthenticated?(
//         <div className='flex flex-col items-center'>
//             {user.profilePic && (
//                 <img src={user.profilePic} alt="User" className='w-20 h-20 rounded-full border-2 border-green-500'
//             )}
//         </div>
//     )}
//     </>
//   );
// };

// export default userProfile
