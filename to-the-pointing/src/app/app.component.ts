import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../app/models/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('loginModal') openModal:ElementRef;
  title = 'to-the-pointing';

  public user: User;
  public showModal: boolean;
  public showAdmin: boolean;
  public votingMessage: String;
  public leaderMessage: String;
  
  ngOnInit() {
    let loginModal = document.getElementById('loginModal');
    this.showModal = true;
    this.showAdmin = false;
  }

  constructor() {
    this.user = new User();
    
   }

  getUserInfo() {
    let form = document.getElementById('loginForm');
    let name = form.elements['username'];
    this.user.username = name.value;

    let leader = form.elements['leader'];
    this.user.leader = leader.checked;

    let voting = form.elements['voting'];
    this.user.voting = voting.checked;
    if(voting.checked) {
      this.votingMessage = "You are not voting";
    } else {
      this.votingMessage = "You are voting";
    }

    if(leader.checked) {
      this.leaderMessage = "You are the leader today"; 
      this.showAdmin = true;
    } else {
      this.leaderMessage = "You are not the leader today";
      this.showAdmin = false;
    }

    this.showModal = false;
    console.log(this.user);
  };
}

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



