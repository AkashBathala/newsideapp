import { Data } from './card-component/data';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public data:Data[]=[
    {id:1235,address:"DS MAx ,Bangaluru" ,date:new Date(),status:true, name:"name1",project:"home"},
    {id:6546,address:"GS MAx ,Bangaluru" ,date:new Date(),status:true, name:"name2",project:"person"},
    {id:2316,address:"Ts TAx ,Bangaluru" ,date:new Date(),status:true, name:"name3",project:"map"},
    {id:2345,address:"DS MAx ,Bangaluru" ,date:new Date(),status:true, name:"name4",project:"people"}
];

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
   console.log(new Date);
    
  }
  
}
