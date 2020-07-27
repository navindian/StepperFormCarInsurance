import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  {
    id: 1,
    title: '34 Critical illness Benefit',
    description:
      'This optional benifits gives full claim payoout on the first diagnosis of 34Critical Illnesses like cancer, heart attack and kidney failure. No hospital bills required. You stay covered for a maximum of 30 years without any change in premium.',
  },
  {
    id: 2,
    title: 'Option to increase life cover',
    description:
      'Life stage benefit gives you an option to increase the cover after Marriage (50% increase), 1st (25% increase) & 2nd (25% increase) childbirth, without any medicals. Additional premium will be calculated based on the increased life cover and remaining policy term as per your age at the time of each such increase.',
  },
  {
    id: 3,
    title: 'Insurance',
    description:
      'Premium paid and benefits received are eligible for tax benefits U/S, 80C and 10 (10D)',
  },
];
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
