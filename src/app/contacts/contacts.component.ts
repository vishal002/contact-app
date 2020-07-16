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
  constructor(private fb: FormBuilder,
              private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['kumar', Validators.required]
    });
    // fetch contact list call
    this.getContactList();
  }
  getContactList() {
    this.contactsService.fetchContactList()
      .subscribe(response => {
        this.contactList = response;
      }, error => {
        console.log(error);
      });
  }
  onSubmit() {
    this.contactsService.createContact(this.createForm.value)
      .subscribe( response => {
       debugger;
      }, error => {
        debugger;
        console.log(error);
      });
  }

}
