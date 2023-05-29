const mongoose=require('mongoose')
const Medicines=require('./Medicines')
const User=require('./shopuser')
const Shop=require('./Shop')
const Schema=mongoose.Schema

const norderSchema =new Schema({
    Medicine:{
        type:Schema.Types.ObjectId,
        ref:"medicines",
        required:true
    },
    MedicineName:{
        type:String
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },

    quantity:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    Shop:{
        type:Schema.Types.ObjectId,
        ref:"Shop",
        required:true
    },
    status:{
        type:String
    },
    deliveryaddress:{
        type:String
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable:true
      },
})

/**norderSchema.statics.createsorder= async function(users,products,deliveryaddress)
{       
    const status='InProcess' 
    let list=[]
    let quant=0
    let quant1=0
    const object=new Object
    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        let prod= await Product.findById({_id:element._id})
        quant=0
        quant= prod.quantity
        console.log(quant)
        quant1=element.quantity
        object.product=element._id
        object.productname=element.name
        object.productsize=element.size
        object.user=users._id
        object.useremail=users.email
        object.userphone=users.phone
        object.shop=element.shop   
        object.price=element.price*element.quantity    
        object.status=status
        object.quantity=element.quantity
        if(deliveryaddress=="")
        {
            object.deliveryaddress=users.address1
        }
        else {
            object.deliveryaddress=deliveryaddress
        }
        if(object.quantity < quant)
        {   quant=quant-element.quantity
            console.log(quant)
            prod= await Product.findOneAndUpdate({_id:prod._id},{quantity:quant}, {new: true,upsert: true})
            console.log(1)
            
            const order=await this.create(object)
            list.push(order._id)
        }
        else{
            continue
        }
       

    }
    return list

}

norderSchema.statics.getordershop= async function(shops)
{
    const checkshop=await Shop.findById({_id:shops})
    console.log(checkshop)
    
    const findshop= await this.find({shop:shops})
    return findshop
}
norderSchema.statics.getordersuser= async function(users)
{
    const checkuser= await User.findById({_id:users})
    console.log(checkuser)
    if(!checkuser)
    {
        throw Error("User Don't Exist")
    }
    let userorder=await this.find({user:users}).sort({createdAt:-1})
    
    return userorder
}**/
module.exports=mongoose.model('Order',norderSchema)