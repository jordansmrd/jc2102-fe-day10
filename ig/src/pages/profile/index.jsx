import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div>
      <Text fontSize="2xl">My Profile</Text>
      <Link to="/">
        <Text>Go back to home page</Text>
      </Link>
        <Text>Hello there</Text>
    </div>
  );
};

export default ProfilePage;
