import './App.scss'
import { Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Navbar } from './global_components/navbar/navbar';
import { Footer } from './global_components/footer/footer';
import { Shop } from './pages/shop/shop';
import { Product_details } from './pages/product_detail/product_detail';
import { Additional_info } from './component/additional_info';
import { Reviews } from './component/reviews';
import { Account } from './pages/account/account';
import { Dashboard } from './component/dashboard';
import { Order } from './component/order';
import { Update_profile } from './component/update_profile';
import { Change_password } from './component/change_password';
import { Logout } from './component/logout';
import { Blog } from './pages/blog/blog';



function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/:name/:id" element={<Product_details />}>
          <Route index element={ <Navigate to="additional_info" replace/>} />
          <Route path="additional_info"  element={<Additional_info />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path='/account' element={<Account />} >
          <Route path='dashboard'  element={<Dashboard/>}/>
          <Route path='order'  element={<Order/>}/>
          <Route path='update_pro'  element={<Update_profile/>}/>
          <Route path='change_pass'  element={<Change_password/>}/>
          <Route path='logout'  element={<Logout/>}/>
        </Route>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App