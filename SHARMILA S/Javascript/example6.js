var phoneDescription=[
{
    phoneId:"1",
    phoneName:"iPhone15",
    phonePrice:100000
},
{
    phoneId:"2",
    phoneName:"One plus",
    phonePrice:40000
},
{
    phoneId:"3",
    phoneName:"Samsung",
    phonePrice:30000
},
{
    phoneId:"4",
    phoneName:"Oppo",
    phonePrice:20000
},
{
    phoneId:"5",
    phoneName:"Vivo",
    phonePrice:15000
}
 
 ]
 
  phoneDescription.map((phone,index)=>{
    console.log("Description of Phone No:"+(index+1))
    console.log(phone.phoneId);
    console.log(phone.phoneName);
    console.log(phone.phonePrice);
 
 })