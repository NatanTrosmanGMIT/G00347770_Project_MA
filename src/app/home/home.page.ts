import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// Declare variables
export class HomePage {
  myStatus: string;
  lat: any;
  long: any;
  login: any = { username: '', password: '' };
  constructor(private storage: Storage,private flashlight: Flashlight, private gps: Geolocation,private camera: Camera) { }

  ionViewDidEnter() {

    this.storage.get("status")
      .then((data) => {
        this.myStatus = data;
      })
      .catch();
}
      Flashlight(){
        console.log("Flashlight");
        this.flashlight.toggle();
      }
      GetGPS() {
        console.log("GPS");
        this.gps.getCurrentPosition().then((res) => {
          this.lat = res.coords.latitude
          this.long = res.coords.longitude
        }).catch((error) => {
          console.log('Error getting location', error);
        });
  }

  UseCamera() {
    console.log("Camera");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    }).catch((error) => {
      console.log('Error accessing camera', error);
    });
  }
    onLogin() {
      console.log('user name:', this.login.username );
      console.log('user password', this.login.password );
    }
  
    setLoginData() {
      this.login.username = 'User1';
      this.login.password = 'User1';
    }
}
