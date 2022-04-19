import { PlakalarService } from './../../services/plaka/plakalar.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() id:string | undefined;
  ad: string | undefined;
  plaka: string | undefined;
  tel: string | undefined;

  constructor(private addApi: PlakalarService) { }

  ngOnInit(): void {
   console.log(this.id);
  }
  ekle(){
    const body = {
      ad: this.ad,
      tel:this.tel,
      plaka:this.plaka
    };
    this.addApi.plakaekle(body).subscribe(res=>{
      if(res.status){
        window.location.reload();
      }
    })
  }



}
