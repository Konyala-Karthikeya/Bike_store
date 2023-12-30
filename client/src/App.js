import TopNav from './components/TopNav'
import HomePage from './components/HomePage'

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<TopNav />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">

//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<TopNav />}>
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/topnav" element={<TopNav />} />
//           <Route path="/featured" element={<Featured />} />
//           <Route path="/delivery" element={<Delivery />} />
//           <Route path="/toppicks" element={<TopPicks />} />
//           <Route path="/meal" element={<Meal/>} />
//           <Route path="/categories" element={<Categories />} />
//           <Route path="/newsletter" element={<NewsLetter />} />
//           <Route path="/footer" element={<Footer />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>

//     </div>
//   );
// }

// export default App;
