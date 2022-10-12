import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import FontContext from "./FontContext";
import {useState} from "react";
import AddReminderPage from "./addReminder";
// import RemindersList from "./RemindersList";
import RemindersListNewAndWorse from "./RemindersListNewAndWorse";
import './App.css'


const App = () => {
    const [currentFont, setCurrentFont] = useState('main-font')

    return (
          <FontContext.Provider value={
             {
                 currentFont: currentFont,
                 setCurrentFont: setCurrentFont
             }
         }>
             <div className="App">
                  <BrowserRouter>
                      <Routes>
                          <Route path="/" element={<Layout />}>
                              {/*<Route index element={<RemindersList />} />*/}
                              <Route index element={<RemindersListNewAndWorse />} />
                              <Route path="/add" element={<AddReminderPage />} />
                          </Route>
                      </Routes>
                  </BrowserRouter>
             </div>
          </FontContext.Provider>
  );
}


export default App;
