import {loadStripe} from '@stripe/stripe-js'

let stripePromise;

const getStripe = () =>{
    if(!stripePromise){
        stripePromise = loadStripe(`pk_test_51LQzNzB0IZeAQFsFVW5NhDXaJMc5G61XTd86FbEs0jwS7JBxhhukronFXzJS3s4QpASQmPSsHx1ayf2ybLYo62ue00UuxhFpoW`)
    }

    return stripePromise
}

export default getStripe