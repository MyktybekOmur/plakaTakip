import { PlakalarService } from './../../services/plaka/plakalar.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-plates',
  templateUrl: './plates.component.html',
  styleUrls: ['./plates.component.scss']
})
export class PlatesComponent implements OnInit {
  id:string | undefined;
  addUser = false;
  plakalar: any = [];
  ad: string | undefined;
  plaka: string | undefined;
  tel: string | undefined;

  constructor(private plakaApi: PlakalarService) { }

  ngOnInit(): void {
    this.getPlakalar();
  }

  getPlakalar(){
    this.plakaApi.plakalar().subscribe(res=>{
      console.log(res);
      if(res.status) this.plakalar =res.data;
    })
  }


  openUpdate(item: any){
    console.log(item);
    this.id = item.id;
     this.ad = item.Ad,
    this.tel = item.Telefon,
    this.plaka = item.Plaka
   
  }
  guncelle(){
    const body = {
      id: this.id,
      ad: this.ad,
      tel:this.tel,
      plaka:this.plaka
    };
    console.log(body);
    this.plakaApi.plakaGuncelle(body).subscribe(res=>{
      if(res.status){
        window.location.reload();
      }
    })
  }
  deleteUser(id: string){
    this.plakaApi.plakaSilme(id).subscribe(res=>{
      if(res.status)  window.location.reload();
    })
  }
  //alertConfirm
  alertConfirmation(id: string) {
    Swal.fire({
      title: 'Silmek ister misiniz?',
      text: 'Seçmiş olduğunuz veri silinecektir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Evet',
      cancelButtonText: 'İptal',
    }).then((result) => {
      if (result.value) {
        this.deleteUser(id); //Swal.fire('Başarılı silindi!', 'success');      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
}
