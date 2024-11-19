import { Component, inject, TemplateRef,Renderer2,AfterViewInit, ElementRef ,ViewChild} from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal ,NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
	@ViewChild('widgetsContent', { read: ElementRef }) widgetsContent!: ElementRef;
	constructor(private render:Renderer2,private el:ElementRef){}
ngAfterViewInit() {
    // const elements = this.el.nativeElement.querySelectorAll('.icons');

    // elements.forEach((element: HTMLElement) => {
    //   console.log("event listener on ",element);
    //   this.render.listen(element, 'touchstart', () => {
    //     this.render.addClass(element, 'touch-hover-effect');
    //   });

    //   // Add touchend event listener
    //   this.render.listen(element, 'touchend', () => {
    //     this.render.removeClass(element, 'touch-hover-effect');
    //   });
    // });
  }
    itemglobal={pageurl:"/first",
		name:"first",
		specifications:["first!!!","first@@@@@","first#####","first$$$$$$$$"],
		imageurl:"assets/storeoption-3.jpg",
		href:"https://api.whatsapp.com/send?phone=918217860187&text=Hii%20i%20would%20like%20to%20book%20for%20first!"
	   }
	items=[
		{pageurl:"/first",
		 name:"Beauty Care Package 1",
		 specifications: [
			"Eyebrow shaping.",
			"Upper lip grooming.",
			"Half-body waxing.",
			"Relaxing pedicure."
		  ],
		 imageurl:"assets/storeoption-3.jpg",
		 href:"https://api.whatsapp.com/send?phone=918217860187&text=I%20want%20to%20book%20Complete%20Beauty%20Package%201"
		},
		{pageurl:"/two",
		  name:"Beauty Care Package 2",
		  specifications: [
			"Eyebrow grooming.",
			"Upper lip care.",
			"Forehead waxing.",
			"Whitening facial."
		  ],
		  imageurl:"assets/storeoption-3.jpg",
		  href:"https://api.whatsapp.com/send?phone=918217860187&text=I%20want%20to%20book%20Complete%20Beauty%20Package%202"
		},
		{pageurl:"/three",
		  name:"Beauty Care Package 3",
		  specifications: [
			"Rejuvenating facial.",
			"Stylish haircut.",
			"Eyebrow shaping.",
			"Upper lip care.",
			"Half-hand waxing.",
			"Half-leg waxing."
		  ],
		  imageurl:"assets/storeoption-4.jpg",
		  href:"https://api.whatsapp.com/send?phone=918217860187&text=I%20want%20to%20book%20Complete%20Beauty%20Package%203"
		}
	  ]
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images=["assets/Banner 1.jpeg","assets/Banner 2.jpeg","assets/Banner.jpeg"]
  pictures=["assets/4-season-1.webp","assets/4-season-3.jpg","assets/4-season-4.jpg","assets/4-season-3.webp","assets/4-season-5.jpg","assets/4-season-4.jpg"]
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>,item:any) {
     this.itemglobal=item;
		this.modalService.open(content, {modalDialogClass: 'dark-modal',scrollable:true});
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
	print(){
		console.log("can use transform");
	}

	scrollLeft(): void {
		this.widgetsContent.nativeElement.scrollLeft -= 200; 
		console.log("left clicked");// Adjust the scroll value as needed
	  }
	
	  scrollRight(): void {
		this.widgetsContent.nativeElement.scrollLeft += 200; 
		console.log("right clicked");// Adjust the scroll value as needed
	  }
}
