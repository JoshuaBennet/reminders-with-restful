import Navbar from "./Navbar";
import RemindersList from "./RemindersList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="about" element={<Add />} />
                  </Route>
              </Routes>
          </BrowserRouter>
        <RemindersList />
      </div>
  );
}

export default App;
