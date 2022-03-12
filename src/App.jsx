import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import AlbumView from "./Pages/AlbumView/AlbumView";

import Home from "./Pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<AlbumView />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
