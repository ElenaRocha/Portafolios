import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.css'],
})
export class UpdateUserFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private usersService: UsersService) {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      alias: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        ),
      ]),
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      const pId = params.id;

      this.usersService
        .getUserById(pId)
        //formulario.patchValue({name: result.name});
        .then((result) => {
          this.formulario = new FormGroup({
            name: new FormControl(result.name, [Validators.required, Validators.minLength(3)]),
            surname: new FormControl(result.surname, [
              Validators.required,
              Validators.minLength(3),
            ]),
            alias: new FormControl(result.alias, [
              Validators.required,
              Validators.minLength(3),
            ]),
            email: new FormControl(result.email, [
              Validators.required,
              Validators.pattern(
                /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/
              ),
            ]),
            password: new FormControl(result.password, [
              Validators.required,
              Validators.pattern(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
              ),
            ]),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  getData(): void {
    const respuesta = this.usersService.createUser(this.formulario.value);
    this.router.navigate(['/rutas/listado']);
  }

  deleteUser(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      const pId = params.id;

      this.usersService.unsuscribe(pId);
    });
  }
}
