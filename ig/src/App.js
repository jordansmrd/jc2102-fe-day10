import { Box } from "@chakra-ui/react";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
