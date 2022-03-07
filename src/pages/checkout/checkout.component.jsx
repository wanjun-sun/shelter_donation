import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss';
import StripeCheckoutButton from "../../components/strip-button/strip-button.component";
import { Option } from "../../components/shelter-dropdown/shelter-dropdown.component";
import { Dropdown } from "../../components/shelter-dropdown/shelter-dropdown.component";

const CheckoutPage = ({cartItems, Total}) => (
    <div className="checkout-page"> 

        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header1-block">
                <span>Description</span>
            </div>
            <div className="last1-child">
                <span>Quantity</span>
            </div>
            <div className="last-child">
                <span>Price</span>
            </div>
            <div className="last-child">
                <span>Remove</span>
            </div>
        </div>

        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}

       
        <div className="wording">Please choose a shelter you would like to donate to</div>    
        <div className="choose-shelter">
            <Dropdown
                action="/"
            >
                {/* <Option value="Click to see options" disabled /> */}
                <Option selected value="Click to see options" />
                <Option value="Katy Shelter" />
                <Option value="Sugarland Shelter" />
                <Option value="Pearland Shelter" />
            </Dropdown>
        </div>
        <div className="total">TOTAL: ${Total}</div>
       
        
        

        <StripeCheckoutButton price={Total} />

        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 06/22 - CVV: 123
        </div>

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    Total: selectCartTotal
})



export default connect(mapStateToProps)(CheckoutPage);