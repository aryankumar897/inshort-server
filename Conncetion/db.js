import mongoose from "mongoose";



const Connection = () => {
   try {
       
    const URL=`mongodb://localhost:27017/booking-udemy`


mongoose.connect(URL,{

})
console.log("database connectd successfully")
   } catch (error) {
       console.log("database connectd error",error)
       
   }
}

export default Connection; 
