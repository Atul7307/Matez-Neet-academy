import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import AboutPage from "./component/AboutPage/AboutPage"; // Example of another page component
import EventsPage from "./component/EventsPage";
import EventReadMore from "./component/EventReadMore/EventReadMore";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer";
import Courses from "./component/Courses/Courses";
import Contact from "./component/Contact/Contact";
import EnrollForm from "./component/EnrollmentForm/EnrollForm";
import ThankYouPage from "./component/EnrollmentForm/ThankYouPage";
import Explore from "./component/AllCourses/Explore";
import CourseDetails from "./component/CourseDetail/CourseDetails";
import FloatingBtn from "./component/FloatingBtn";
import ScrollToTopButton from "./component/ScrollToTopButton";
import EventReadMore2 from "./component/EventReadMore/EventReadMore2";
import RegistrationForm from "./component/EventReadMore/RegistrationForm";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/event" element={<EventsPage />} />
          <Route path="/ReadMore" element={<EventReadMore />} />
          <Route path="/RegistrationDesk" element={<EventReadMore2/>} />
          <Route path="/RegistrationDesk/Registrationform" element={<RegistrationForm/>} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/EnrollForm" element={<EnrollForm />} />
          <Route path="/ThankYouPage" element={<ThankYouPage />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/allcourses/explore/:id" element={<CourseDetails />} />
        {/* <Route
          path="/event-details/:id"
          element={<EventDetails />}
        /> */}
        </Routes>
        <ScrollToTopButton />
        <FloatingBtn />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
