import { ChakraProvider, Container } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./onest/LandingPage";
import MediaPage from "./onest/content/MediaPage";
import UserDetailsForm from "./onest/content/UserDetailsForm";
import AutomatedForm from "./onest/job/AutomatedForm";
import List from "./onest/List";
import View from "./onest/View";

const App = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.lg" mt={8}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/:type" element={<List />} />
            <Route path="/:type/:jobId" element={<View />} />
            <Route
              path="/automatedForm/:jobId/:transactionId"
              element={<AutomatedForm />}
            />
            <Route path="/confirm/:itemId" element={<MediaPage />} />
            <Route path="/form" element={<UserDetailsForm />} />
          </Routes>
        </Router>
      </Container>
    </ChakraProvider>
  );
};

export default App;
