import { Component, OnInit } from '@angular/core';

interface Testimonial {
  imageUrl: string;
  name: string;
  position: string;
  stars: string[];
  quote: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  introText =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.';

  testimonials: Testimonial[] = [
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp',
      name: 'Teresa May',
      position: 'Founder at ET Company',
      stars: [
        'fas fa-star',
        'fas fa-star',
        'fas fa-star',
        'fas fa-star',
        'fas fa-star-half-alt',
      ],
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
    },
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp',
      name: 'Maggie McLoan',
      position: 'Photographer at Studio LA',
      stars: [
        'fas fa-star',
        'fas fa-star',
        'fas fa-star',
        'fas fa-star',
        'fas fa-star',
      ],
      quote:
        'Autem, totam debitis suscipit saepe sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis labore laboriosam.',
    },
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp',
      name: 'Alexa Horwitz',
      position: 'Front-end Developer in NY',
      stars: [
        'fas fa-star',
        'fas fa-star',
        'fas fa-star',
        'fas fa-star',
        'far fa-star',
      ],
      quote:
        'Cras sit amet nibh libero, in gravida nulla metus scelerisque ante sollicitudin commodo cras purus odio, vestibulum in tempus viverra turpis.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
