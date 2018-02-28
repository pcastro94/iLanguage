import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Socket } from 'ng-socket-io';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text:string;
  texto;

  teste;

  constructor(private tts: TextToSpeech, public navCtrl: NavController, private socket: Socket) {

    // teste
    this.teste = "teste"


    // logica
    this.socket.connect();
    this.socket.on("palavra", function(data){
      console.log(data)
      this.data;
      // let textoLuva = this.texto;
      // textoLuva = data;
      //   if(textoLuva==textoLuva){
      //     this.textoLuva+=textoLuva
    
      //   }

  
    })
  }

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

 




