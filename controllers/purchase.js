
const Razorpay = require('razorpay');
const Order = require('../models/order');
const user = require('../models/user');


exports.purchasepremium =async (req, res) => {
    try {
        var rzp = new Razorpay({
            key_id: "rzp_test_6ArcjqoOs3fJP0" ,
            key_secret: "nCHafi7P2prr4snBs1HAlSjI"
        })
        const amount = 2500;

        rzp.orders.create({amount, currency: "INR"}, (err, order) => {
            if(err) {
                throw new Error(err);
            }
            const createOrder = new Order({ orderid: order.id, status: 'PENDING',userId:req.user._id,})
            console.log(createOrder)
            return createOrder.save()
            .then(() => {
                return res.status(201).json({ order, key_id : rzp.key_id});

            }).catch(err => {
                throw new Error(err)
            })
        })
    } catch(err){
        console.log(err);
        res.status(403).json({ message: 'Sometghing went wrong', error: err})
    }
}

 exports.updateTransactionStatus = (req, res ) => {
    try {
        const { payment_id, order_id} = req.body;
        Order.findOne( {'orderid' : order_id}).then(order => {
            order.paymentid = payment_id
            order.status = 'SUCCESSFUL'
            return order.save()
            .then(() => {
                user.findOne()
                return res.status(202).json({sucess: true, message: "Transaction Successful"});
            }).catch((err)=> {
                throw new Error(err);
            })
        }).catch(err => {
            throw new Error(err);
        })
    } catch (err) {
        console.log(err);
        res.status(403).json({ error: err, message: 'Sometghing went wrong' })

    }
}
