import React, { useState } from 'react'

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const __DEV__ = document.domain === 'localhost'

function Payment() {
    const [name, setName] = useState('Syed Shamsher Ali')

    async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const data = await fetch('http://localhost:4000/razorpay', { method: 'POST' }).then((t) =>
            t.json()
        )

        console.log(data)

        const options = {
            key: __DEV__ ? 'rzp_test_hxMsWAosY9EDQg' : 'PRODUCTION_KEY',
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: 'Pay',
            handler: function (response) {
                alert(response.razorpay_payment_id)
                alert(response.razorpay_order_id)
                alert(response.razorpay_signature)
            },
            prefill: {
                name,
                email: 'syedshamsher9174@gmail.com',
                phone_number: '7987418498'
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    onClick={displayRazorpay}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pay
                </a>
            </header>
        </div>
    )
}

export default Payment