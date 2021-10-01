// import React from "react";

// const Profile = (props) => {
//   return <h1>{props.match.params.user} Profile</h1>;
// };

// export default Profile;

// import React from "react";

// const Profile = ({match}) => {
//   const { params } = match
//   const { user } = params
//   return <h1>{user} Profile</h1>;
// };

// export default Profile;

import React from "react";

const Profile = ({ match }) => {
  const {
    params: { user },
  } = match;
  return <h1>{user} Profile</h1>;
};

export default Profile;
