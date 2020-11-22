import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrailsService } from 'src/app/services/trails.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-trail-form',
  templateUrl: './update-trail-form.component.html',
  styleUrls: ['./update-trail-form.component.css'],
})
export class UpdateTrailFormComponent implements OnInit {
  formulario: FormGroup;
  arrCathegories: Array<any>;

  constructor(private router: Router, private trailsService: TrailsService, private activatedRoute: ActivatedRoute) {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      length: new FormControl('', [Validators.required]),
      slope: new FormControl('', [Validators.required]),
      circular: new FormControl(''),
      province: new FormControl('', [Validators.required]),
      transport: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.trailsService
      .getAllCathegories()
      .then((result) => {
        this.arrCathegories = result;
      })
      .catch((err) => {
        console.log(err);
      });

    /*this.activatedRoute.params.subscribe(async (params) => {
      const pId = params.id;

      //formulario.patchValue({name: result.name});

      this.trailsService
        .getTrailById(pId)
        .then((result) => {
          this.formulario = new FormGroup({
            name: new FormControl(result.name, [Validators.required]),
            description: new FormControl(result.description, [Validators.required]),
            time: new FormControl(result.time, [Validators.required]),
            length: new FormControl(result.length, [Validators.required]),
            slope: new FormControl(result.slope, [Validators.required]),
            circular: new FormControl(slope.circular),
            province: new FormControl(slope.province, [Validators.required]),
            transport: new FormControl(slope.transport, [Validators.required]),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });*/
  }

  getData(): void {
    const modifiedForm = {
      name: this.formulario.value.name,
      description: this.formulario.value.description,
      time: this.formulario.value.time,
      length: this.formulario.value.length,
      slope: this.formulario.value.slope,
      circular: this.formulario.value.circular,
      province: this.formulario.value.province,
      location: [
        this.formulario.value.latitude,
        this.formulario.value.longitude,
      ],
      transport: this.formulario.value.transport,
    };

    this.trailsService.registerTrail(modifiedForm);
    this.router.navigate(['/rutas/listado']);
  }

  chooseCathegory($event) {}

  deleteTrail(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      const pId = params.id;

      this.trailsService.deleteTrail(pId);
    });
  }
}
