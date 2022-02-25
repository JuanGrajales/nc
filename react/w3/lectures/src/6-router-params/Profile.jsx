import React from "react";

const Profile = (props) => {
  // const Profile = ({
  //   match: {
  //     params: { user },
  //   },
  // }) => {
  const userInfo = props.users.find(
    (user) => user.id === props.match.params.id
  );
  return (
    <div>
      <h1>{userInfo.name}'s Profile</h1>
      {/* <h1>{props.match.params.user}'s Profile</h1> */}
      {/* <h1>{user}'s Profile</h1> */}
      <p>Img</p>
      <p>Bio: {userInfo.bio}</p>
      <p>
        posts:
        <ul>
          {userInfo.posts.map((post) => {
            return (
              <li>
                <h3>{post}</h3>
              </li>
            );
          })}
        </ul>
      </p>
    </div>
  );
};

export default Profile;
