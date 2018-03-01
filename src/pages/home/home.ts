import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Socket } from 'ng-socket-io';
import { NgZone} from '@angular/core';
// import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text:string;
  texto;
  private messages: any;
  teste="asdasd";
  word = "sdfghjkl";
  

  constructor(private tts: TextToSpeech, public navCtrl: NavController, private socket: Socket, /*private ngZone:NgZone*/) {

    this.messages ={};
    // logica
    this.socket.connect();
    this.socket.on("on:send-message", function(data){
      this.ngZone.run(() => {
        this.messages.push(data);
        // console.log("message :", messages);
      });
    });
  }

    // this.teste ="";
    // // logica
    // this.socket.connect();
    // this.socket.on("palavra", function(data){
    //   console.log(data)
    //   this.teste = this.teste + data;
    //   console.log(this.teste);
    //   return this.teste;
    // })
  // }

  
  async sayText(): Promise<any>{
    
    try{
      await this.tts.speak(this.text);
      console.log("Sucessfully spoke" +  this.text);
    }
    catch(e){
      console.log(e);
    }
  }
}


// if(data == "speak"){
//   try{
//     await this.tts.speak(this.text);
//     console.log("Sucessfully spoke" +  this.text);
//   }
//   catch(e){
//     console.log(e);
//   }
// }

 




