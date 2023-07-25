import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
} from '@syncfusion/ej2-angular-pdfviewer';
import * as CryptoJS from 'crypto-js';
/**
 * Default PdfViewer Controller
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:max-line-length
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
  ],
})
export class AppComponent {
  key: string = 'z!!!!!!!1sdfadsf56adf456asdfasdf';
  appProperties = {
    VALUES: {
      KEY: 'MTIzNDU2Nzg5MEFCQ0RFRkdISUpLTE1O',
      IV: 'MTIzNDU2Nzg=',
    },
  };
  public service: string =
    'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
  public document: string = 'FormFillingDocument.pdf';
  public isInternal: boolean = false;

  ngOnInit(): void {
    // var url = "U2FsdGVkX18MuYMJDjXaZE853PD4N4u7nRjPFO8d1h1jY6xjXQijPiTMORLjAcZhfrMfhZAfCa6NrRm%2FhvR%2Fy0Lgidzkl5NVXh73rCUTbXh1pNa2rf0FWcKIlX7s05UM";
    // var a = decodeURIComponent(url.toString());
    // var b = this.decryptionAES(a);
    // console.log(b)

    var aaa = this.isInternal == true ? 'internal' : 'external';
    var bbb = 'f0dd9329-cec0-48cc-9174-3d9d50d8786f';
    var ccc = 'jayasinghe89+3@gmail.com';
    var ddd = 'Eshan Jayasighe';

    var a = `${aaa?.trim()}~~${bbb?.trim().toString()}~~${ccc
      ?.trim()
      .toString()}~~${ddd?.trim().toString()}~~2~~1`;
    var b = this.encryptionAES(a);
    var c = encodeURIComponent(b.toString());
    var d =
      `https://evia.enadocapp.com/sign/#/sign/${c}/186a85d6-8f78-4d7d-9676-52c69572c003/loginServlet`
        ?.trim()
        .toString();
    console.log(d);
  }
  remove() {
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    var forms = viewer.retrieveFormFields();
    viewer.clearFormFields(forms[8]);
  }

  encryptionAES(msg) {
    // Encrypt
    console.log(msg.toString());
    const ciphertext = CryptoJS.AES.encrypt(msg, 'secret key 123');
    console.log(ciphertext.toString());
    return ciphertext.toString();
  }

  decryptionAES(msg) {
    // Decrypt
    const bytes = CryptoJS.AES.decrypt(msg, 'secret key 123');
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  }
}
