import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Socket } from 'ng-socket-io';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 data: any;

 text:string;

 teste;
 palavra: any = "";


  

  constructor(private tts: TextToSpeech, public navCtrl: NavController, private socket: Socket) {

    this.socket.connect();
    this.socket.fromEvent<any>("palavra").subscribe((data) => {
      console.log(data);
      this.palavra=data;
      console.log(this.palavra);
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

  
 




