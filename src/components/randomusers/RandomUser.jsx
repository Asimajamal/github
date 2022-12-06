// import React from "react";

// const RandomUser = ({ users }) => {
//   return (
//     <>
//       <div>
//         <h2 className="text-center mt-3">List of Random Users</h2>
//         <div className="container">
//           <div className="d-flex row">
//             {users.map((props) => {
              
//               return (
//                 <div className="col-10 col-md-4 mt-5 " key={props.login.uuid}>
//                   <div className="card p-2">
//                     <div className="d-flex ">
//                       <div className="image p-2">
                     
//                         <img
//                           alt="thm"
//                           src={props.picture.large}
//                           className="rounded"
//                           width="155"
//                           height="255"
//                         />
//                       </div>
//                       <div className="ml-3 w-100 mt-2">
//                         <h6 className="mb-0 mt-0  p-2">
//                           {props.name.title}. {props.name.first}
//                           {props.name.last}
//                         </h6>
//                         <span className=" p-2">
//                           <strong>{props.gender}</strong>
//                         </span>
//                         <div className="p-2 text-muted">
//                           <strong>{props.cell}</strong>
//                         </div>
//                         <div className="p-2" style={{ fontSize: "12px" }}>
//                           {props.email}
//                         </div>
//                         <div className="p-2">
//                           City: <strong>{props.location.city}</strong>
//                         </div>
//                         <div className="p-2">
//                           State: <strong>{props.location.state}</strong>{" "}
//                         </div>
//                         <div className="p-2">
//                           Country: <strong>{props.location.country}</strong>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RandomUser;

import React,{memo} from "react";
interface usersType {
  user: userType;
  id: number;
}

const RandomUser =memo(function RandomUser(props: usersType) {
  return (
    <>
     
      
      
        <div className="container">
          
            
              
             
                {/* <div className="col-10 col-md-4 mt-5 " > */}
                  <div className="card p-2 my-2">
                    <div className="d-flex ">
                      <div className="image p-2">
                     
                        <img
                          alt="thm"
                          src={props.user.userImageURL}
                          className="rounded"
                          width="155"
                          height="255"
                        />
                          <div className="my-1 " > <strong>User No {props.id + 1}</strong></div>
                      </div>
                      <div className="ml-3 w-100 mt-2">
                        <h6 className="mb-0 mt-0  p-2">
                        {props.user.name}
                        </h6>
                        <span className=" p-2">
                          <strong>{props.user.gender}</strong>
                        </span>
                        <div className="p-2 text-muted">
                          <strong>{props.user.contact}</strong>
                        </div>
                        <div className="p-2" style={{ fontSize: "12px" }}>
                          {props.user.email} 
                        </div>
                        <div className="p-2">
                          City: <strong>{props.user.city}</strong>
                        </div>
                        <div className="p-2">
                          State: <strong>{props.user.state}</strong>{" "}
                        </div>
                        <div className="p-2">
                          Country: <strong>{props.user.country}</strong>
                        </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
              
           
          {/* </div> */}
    
          
    </>
);
});

export default RandomUser;
