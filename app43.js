//npm i nodemailer
//import thu vien
const express=require('express');
const mailer=require('nodemailer');
const app43=express();//tao doi tuong express
//tao thong tin nguoi gui
let transporter=mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'trungpc104@gmail.com',
        pass: 'ggqg tqpt mpck woam'
    }
});
//noi dung can gui
let mailOption={
    from: 'trungpc104@gmail.com',
    to: 'trungpc100@gmail.com',
    subject: 'tesssssssss gui mail',
    text: 'Day la email gui ngay 22/7'
};
//thuc hien gui
transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log("Thanh cong: ",info.messageId);
    }
});
//lang nghe
app43.listen(3002,()=>{
    console.log("server dang chay o cong 3002");
});