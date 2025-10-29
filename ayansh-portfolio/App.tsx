import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/not-found";

function Router({ toggleTheme, isDark }: { toggleTheme: () => void; isDark: boolean }) {
  return (
    <Switch>
      <Route path="/" component={() => <Home toggleTheme={toggleTheme} isDark={isDark} />} />
      <Route component={NotFound} />
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
    </Switch>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return <Router toggleTheme={toggleTheme} isDark={isDark} />;
}

export default App;
