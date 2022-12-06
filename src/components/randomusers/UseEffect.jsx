// import React, { useEffect, useState } from "react";
// import RandomUser from "./RandomUser";
// // import Loading from "./Loading";

// const UseEffect=(props)=>{

//     const url='https://randomuser.me/api/?results=10';
//     const [users ,setUsers] = useState([]);
//     // const [loading,setLoading] =useState(true);

//     const getUsers=async ()=>{

//         // try{

//         const response=await fetch(url);
//         // setLoading(false);
//         const data= await response.json();
//         setUsers(data.results);

//         }
//         // catch(error){
//         //     setLoading(false);
//         //     console.log("Error is " + error);
//         // }

//     useEffect(()=>{
//        getUsers();

//     },[])

//     // if(loading){
//         // return <Loading/>;
//     // }
//     return(

//         <>
// <RandomUser users={users}/>
//         </>
// )
//     }

// export default UseEffect;

import React, { useEffect, useState } from "react";
import RandomUser from "./RandomUser";
// import Loading from "./Loading";
export interface userType {
  userImageURL: string;
  name: string;
  gender: "male" | "female";
  email: string;
  city: string;
  state: string;
  country: string;
  contact: string;
}
interface genderTypes {
  male: string;
  female: string;
}

interface countryTypes {
  Fr: string;
  IN: string;
  NZ: string;
  US: string;
  CA: string;
  TR: string;
  IR: string;
  NL: string;
  
}
const UseEffect = () => {
  const [users, setUsers] = useState();
  const [usersToFetch, setusersToFetch] = useState(5);
  const [gender, setGender] = useState(undefined);
  const [country, setCountry] = useState(undefined);
  
  useEffect(() => {
    //fetch random 6 users

    fetch("https://randomuser.me/api/?results=6")
      .then((res) => res.json())
      .then((result) => {
        const userList = result.results;

        const customUserList: userType[] = [];

        userList.forEach((user: any) => {
          customUserList.push({
            userImageURL: user.picture.large,
            name: `${user.name.first} ${user.name.last}`,
            gender: user.gender,
            email: user.email,
            city: user.location.city,
            state: user.location.state,
            country: user.location.country,
            contact: user.cell,
          });
        });

        setUsers([...customUserList]);
      });
  }, []);

  // catch(error){
  //     setLoading(false);
  //     console.log("Error is " + error);
  // }

  return (
    <div className="container">
      <h2 className="text-center mt-3">List of Random Users</h2>
      <div className="  mt-3 d-flex justify-content-center">
        <UsersToFetchDropdown
          usersToFetch={usersToFetch}
          setusersToFetch={setusersToFetch}
         
        />
        <FetchUserFilters
            gender={gender}
            setGender={setGender}
            country={country}
            setCountry={setCountry}
          />
         
      </div>

      
      <div className="text-center">
        <FetchButton usersToFetch={usersToFetch} setUsers={setUsers} gender={gender}
            country={country} />
      </div>

      <div className="row">
       
          {users?.map((user, idx) => {
            return (
              <div className="col" key={idx}>
                <RandomUser user={user} id={idx} />
              </div>
            );
          })}
        </div>
      </div>

  );
};

interface fetchButtonProps {
  usersToFetch: number;
  setUsers: (users: userType[]) => void;
  gender: genderTypes | undefined;
  country: countryTypes | undefined;
}

//fetch button
const FetchButton = (props: fetchButtonProps) => {
  const API_ENDPOINT = "https://randomuser.me/api/";

  const getGender = (gender: genderTypes | undefined) =>
    gender ? `&gender=${gender}` : "";

  const getCountry = (country: countryTypes | undefined) =>
    country ? `&nat=${country}` : "";

  const fetchUser = async () => {
   
 

    const response = await fetch(
      `${API_ENDPOINT}?results=${props.usersToFetch}${getGender(
        props.gender
      )}${getCountry(props.country)}`
    );
    const userData = await response.json();

    const userList = userData.results;

    //Map the response data to what's needed
    const customUserList: userType[] = [];
    userList.forEach((user: any) => {
      customUserList.push({
        userImageURL: user.picture.large,
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
        email: user.email,
        city: user.location.city,
        state: user.location.state,
        country: user.location.country,
        contact: user.cell,
      });
    });

    props.setUsers([...customUserList]);
  };
  return (
    <button type="button" className="btn btn-dark my-3" onClick={fetchUser}>
      Click To Fetch
    </button>
  );
};
interface usersToFetchDropdownTypes {
  usersToFetch: number;
  setusersToFetch: (users: number) => void;
}
const UsersToFetchDropdown = (props: usersToFetchDropdownTypes) => {
  const handleUsersToFetch = (e: any) => {
    e.preventDefault();
    props.setusersToFetch(e.target.value);
  };

 
  

  return (
  <div>
    <label
      htmlFor="fetch-dropdown"
      className={"bg-dark text-light p-2 rounded  "}
    >
      {`Number of users`}
      <select
        value={props.usersToFetch}
        name="fetch"
        id="fetch-dropdown"
        onChange={handleUsersToFetch}
        className="bg-dark text-light mx-1 border border-dark "
      >
        <option value={6}>6</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
        <option value={1}>1</option>
      </select>
    </label>
  </div>

   
  );
};
interface fetchUserFilterTypes {
  gender: genderTypes | undefined;
  setGender: (gender: genderTypes | undefined) => void;
  country: countryTypes | undefined;
  setCountry: (country: countryTypes | undefined) => void;
}
const FetchUserFilters = (props: fetchUserFilterTypes) => {
  const handleGenderSelection = (e: any) => {
    if (e.target.value === "--") props.setGender(undefined);
    else props.setGender(e.target.value);
    console.log(e.target.value);
  };

  const handleCountrySelection = (e: any) => {
    if (e.target.value === "--") props.setCountry(undefined);
    else props.setCountry(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="mx-2">
        <label
          className={"bg-dark text-light p-2 rounded  "}
          htmlFor="gender-dropdown"
        >{`Gender `}
         <select
          value={undefined}
          name="gender"
          id="gender-dropdown"
          onChange={handleGenderSelection}
          className="bg-dark text-light mx-1 border border-dark "
        >
          <option value={undefined}>--</option>
          <option value={"female"}>Female</option>
          <option value={"male"}>Male</option>
        </select></label>
       
      </div>
      <div>
        <label
          className={"bg-dark text-light p-2 rounded  "}
          htmlFor="nationality-dropdown"
        >{`Country `}
        <select
          value={undefined}
          name="nationality"
          id="nationality-dropdown"
          onChange={handleCountrySelection}
          className="bg-dark text-light mx-1 border border-dark "
        >
          <option value={undefined}>--</option>
          <option value={"TR"}>Turkey</option>
          <option value={"IR"}>Iran</option>
          <option value={"NZ"}>New zealand</option>
          <option value={"FR"}>France</option>
          <option value={"US"}>US</option>
          <option value={"IN"}>India</option>
          <option value={"CA"}>Canada</option>
          <option value={"NL"}>Nehterlands</option>
        </select></label>
        
      </div>
    </>
  );
};





  

export default UseEffect;
