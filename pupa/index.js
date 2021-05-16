import {ECB} from 'cryptokuznechik';
import {CBC} from 'cryptokuznechik';
import {CFB} from 'cryptokuznechik';
import {CTR} from 'cryptokuznechik';
import {OFB} from 'cryptokuznechik';
import fs from "fs";

fs.readFile("for_code.jpg",function(err,data){
    if(err) throw err;
    let buffer = Buffer.from(data);
    console.log(buffer);/*
    let D1 = new OFB();
    let Encr = D1.Encrypt(buffer);
    let Decr = D1.Decrypt(Encr);
    fs.writeFileSync("Encr.jpg",Encr);
    fs.writeFileSync("Decr.jpg",Decr);
    /*=================================================*//*
    let D2 = new CTR();
    let Encr2 = D2.Encrypt(buffer);
    let Decr2 = D2.Decrypt(Encr2);
    fs.writeFileSync("Encr.jpg",Encr2);
    fs.writeFileSync("Decr.jpg",Decr2);*/
    /*
    let D2 = new CFB();
    let Encr2 = D2.Encrypt(buffer);
    let Decr2 = D2.Decrypt(Encr2);
    fs.writeFileSync("Encr.jpg",Encr2);
    fs.writeFileSync("Decr.jpg",Decr2);*/
    /*
    let D2 = new CFB();
    let Encr2 = D2.Encrypt(buffer);
    let Decr2 = D2.Decrypt(Encr2);
    fs.writeFileSync("Encr.jpg",Encr2);
    fs.writeFileSync("Decr.jpg",Decr2);*/
    /*
    let D2 = new CBC();
    let Encr2 = D2.Encrypt(buffer);
    let Decr2 = D2.Decrypt(Encr2);
    fs.writeFileSync("Encr.jpg",Encr2);
    fs.writeFileSync("Decr.jpg",Decr2);*/
    let D2 = new ECB();
    let Encr2 = D2.Encrypt(buffer);
    let Decr2 = D2.Decrypt(Encr2);
    fs.writeFileSync("Encr.jpg",Encr2);
    fs.writeFileSync("Decr.jpg",Decr2);
});
