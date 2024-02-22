import "./checkout.scss";

export const Checkout = () => {
    window.scroll(0, 0);

  return (
    <div className="complete_order_section">
      <div className="heading">
        <div className="container">
          <h2>home</h2>
          <h2>/</h2>
          <h2>your cart</h2>
          <h2>/</h2>
          <h2>checkout</h2>
        </div>
          </div>
          
          <div className="wrapper container">
              <h3>billing details</h3>

              <form action="#">
                  <input type="text" placeholder="name"  required/>
                  <input type="text" placeholder="address" required />
                  <input type="text" placeholder="city"  required/>
                  <input type="text" placeholder="country"  required/>
                  <input type="text" placeholder="postcode" required />
                  <input type="number" placeholder="phone" required />
                  <input type="email" placeholder="email" required />

                  <h4>additional infomation</h4>
                  <textarea placeholder="order note(optional)" name="note" id="note" cols="30" rows="10"></textarea>
               
<button>place order</button>
              </form>
          </div>
    </div>
  );
};
