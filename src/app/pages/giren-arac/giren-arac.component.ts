import { GirenaraclarService } from './../../services/girenaraclar/girenaraclar.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-giren-arac',
  templateUrl: './giren-arac.component.html',
  styleUrls: ['./giren-arac.component.scss']
})
export class GirenAracComponent implements OnInit {
  araclar: any = [];
  constructor(private api: GirenaraclarService) { }

  ngOnInit(): void {
    this.getAraclar();
  }
  getAraclar(){
    this.api.girenAraclar().subscribe(res=>{
      console.log(res); 
     if(res.status) 
      this.araclar = res.data;
    })
  }
  deleteUser(id: string){
    this.api.girenAraclarSil(id).subscribe(res=>{
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
