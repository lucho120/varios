import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service/noticias.service';
import { Autor } from '../models/autor.models';
import { Noticia } from '../models/noticia.models';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-noticias',
  templateUrl: './agregar-noticias.page.html',
  styleUrls: ['./agregar-noticias.page.scss'],
})
export class AgregarNoticiasPage implements OnInit {

  autores:Autor[];
  noticia:Noticia=new Noticia();
  esEditable: boolean = false;
  constructor(private noticiaServicio:NoticiasService,public loadingController: LoadingController,
    public toastController: ToastController, private activatedRoute : ActivatedRoute) { }

    ngOnInit() {

  
      if(this.activatedRoute.snapshot.params.noticiaEditar != undefined)
      {
        this.noticia = new Noticia(JSON.parse(this.activatedRoute.snapshot.params.noticiaEditar));
        this.esEditable = true
      }
      this.noticiaServicio.listadoAutores().subscribe((listadoAutores)=>{
        this.autores = listadoAutores
      })
    }  
  async guardar()
  {
    const loading = await this.loadingController.create({
      message: 'Guardando Noticia',
    });
    await loading.present();

    
    this.noticiaServicio.agregarNoticia(this.noticia).subscribe(()=>{
      this.noticia = new Noticia(null)
      loading.dismiss();
      this.mostrarMensaje("Noticia Guardada")
     
    },
    error=>{
      this.mostrarMensaje("Ocurrio un error al guardar")
      loading.dismiss();
    })
  }
  async mostrarMensaje(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
  
  async editar()
  {
    const loading = await this.loadingController.create({
      message: 'Editando Noticia',
    });
    await loading.present();

    
    this.noticiaServicio.editarNoticia(this.noticia).subscribe(()=>{
      
      loading.dismiss();
      this.mostrarMensaje("Noticia Editada")
     
    },
    error=>{
      this.mostrarMensaje("Ocurrio un error al guardar")
      loading.dismiss();
    })
  }


}
