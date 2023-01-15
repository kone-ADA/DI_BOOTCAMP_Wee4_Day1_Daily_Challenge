import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = {
    name: "KOne",
    prenom: "Yaya",
    profilePictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3CozZetOAxhRWyJxH_hxfmzU5KepkFPohcihUCp7rQ&s"
  }
  constructor() { }

  ngOnInit(): void {
  }

  getFullName(user: User) {
    return `${user.name} ${user.prenom}`;
  }

}

class User {
  name?: String;
  prenom?: String;
  profilePictureUrl?: String;
}


