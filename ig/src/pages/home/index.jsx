import { useState, useEffect } from "react";
import ContentCard from "../../components/ContentCard";
import axios from "axios";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Center,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { API_URL } from "../../configs/api";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../configs/api";
const HomePage = () => {
  const [contentList, setContentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchContentList() {
    setIsLoading(true);

    setTimeout(() => {
      axiosInstance
        .get("/posts", {
          params: {
            _expand: "user",
          },
        })
        .then((res) => {
          setContentList(res.data);
        })
        .catch((err) => {
          alert(err)
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  };

  const renderContentList = () => {
    return contentList.map((val) => {
      return (
        <ContentCard
          username={val.user.username}
          caption={val.caption}
          imageUrl={val.image_url}
          location={val.location}
          numberOfLikes={val.number_of_likes}
          id={val.id}
        />
      );
    });
  };

  useEffect(() => {
    fetchContentList();
  }, []);


  return (
    <>
      {isLoading ? <Spinner size="lg" /> : null}
      <Link to="/profile">
        <Button>Go To Profile</Button>
      </Link>
      <Button onClick={fetchContentList}>Refresh Page</Button>
      <Center>
        <Box paddingY="8">{renderContentList()}</Box>
      </Center>
    </>
  );
};

export default HomePage;
