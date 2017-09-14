import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private transfer: FileTransfer, private file: File) {

  }

  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'https://www.passinwallet.com/pass.zip';
    fileTransfer.download(url, this.file.dataDirectory + 'pass.zip', true).then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      console.log("download error source " + error.source);
      console.log("download error target " + error.target);
      console.log("download error code" + error.code);
    });
    fileTransfer.abort();
  }

}
