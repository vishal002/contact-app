import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  createForm: FormGroup;
  contactList: any;
  message: any;
  constructor(private fb: FormBuilder,
              private contactsService: ContactsService) {
    this.message = '';
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required]
    });
    // fetch contact list call
    this.getContactList();
  }
  getContactList() {
    this.contactsService.fetchContactList()
      .subscribe(response => {
        this.contactList = response;
      }, error => {
        // this.message = 'Some error occurred, try again';
        console.log(error);
      });
  }
  onSubmit() {
    this.contactsService.createContact(this.createForm.value)
      .subscribe( response => {
       console.log('updated sucessfully');
       this.message = 'updated sucessfully';
       this.createForm.reset();
       this.getContactList();
      }, error => {
        console.log(error.message);
        this.message = 'Some error occurred';
        setTimeout( () => this.message = '', 3000);
      });
  }

}
