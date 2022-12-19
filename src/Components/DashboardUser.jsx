// import axios from "axios";
// import React, { useState, useEffect } from "react";

// export const DashboardUser = ({ data, setGetData }) => {
//   const deleteUser = async (id) => {
//     await axios
//       .delete("http://localhost:5000/createuser/" + id)
//       .then((response) => alert("User Deleted"));
      
//   };
//   return (
//     <div className="row d-flex justify-content-center">
//       <div className="col-12 d-flex justify-content-center">
//         <div>
//           {/* Hello here <button onClick={getUser}></button> */}
//           <table>
//             <thead>
//               <tr>
//                 <td>Name</td>
//                 <td>City</td>
//                 <td>Mobile</td>
//                 <td>Salary</td>
//                 <td>Profile Image</td>
//                 <td>Edit</td>
//                 <td>Delete</td>
//               </tr>
//             </thead>
//             <tbody>
//               {data &&
//                 data.map((user, key) => (
//                   <tr key={user.id}>
//                     {" "}
//                     <td>{user.name}</td>
//                     <td>{user.city}</td>
//                     <td>{user.mobile}</td>
//                     <td>{user.salary}</td>
//                     <td>{user.img}</td>
//                     <td>
//                       <button>Edit</button>
//                     </td>
//                     <td>
//                       <button onClick={() => deleteUser(user.id)}>
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
