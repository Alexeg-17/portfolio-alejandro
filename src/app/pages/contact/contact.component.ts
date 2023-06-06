import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  


  ngOnInit(): void {
  }
  
  public sendEmail(e: Event) {
Notiflix.Loading.standard('sending...');
    e.preventDefault();
    const formulario = document.getElementById('myForm') as HTMLFormElement;
 
    emailjs.sendForm('service_ft4knx7', 'template_boss66b' ,e.target as HTMLFormElement, 'xXlDT3UP043RxSO4I')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        Notiflix.Loading.remove();
        formulario.reset();
      }, (error) => {
        console.log(error.text);
        
      });
  }
}
