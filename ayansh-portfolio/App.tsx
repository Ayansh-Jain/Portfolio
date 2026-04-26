import { useEffect } from "react";
import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Home />} />
      <Route component={NotFound} />
      <Toaster position="bottom-right" toastOptions={{
        duration: 3000,
        style: { background: '#1a1a1a', color: '#fff', border: '1px solid rgba(245,158,11,0.2)' }
      }} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return <Router />;
}

export default App;
