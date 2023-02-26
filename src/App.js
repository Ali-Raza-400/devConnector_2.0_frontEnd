import "./App.css";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";
import setAuthToken from "./utils/setAuthTokens";
import { useEffect } from "react";
import { LoadUser } from "./actions/auth";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(LoadUser());
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path="/create-profile"
              element={<PrivateRoute component={CreateProfile} />}
            />
            <Route
              path="/edit-profile"
              element={<PrivateRoute component={EditProfile} />}
            />
          </Routes>
          <Alert />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
