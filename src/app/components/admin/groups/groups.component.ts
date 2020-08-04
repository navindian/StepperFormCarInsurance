import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



const groupNames:string[]=[
  'Abstract','Hypertext','Callback','Boolean' ,'Runtime','CAMA' ,'FrontPage','Hoard',
'Daemon' ,'Thrift Torrent' ,'Software' ,'Gob' ,'Celestial' ,'Open Source','Data Pirates'

]
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  displayedColumns:string[]=['id','GroupName','Description'];
  datasource

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(){
    const group = Array.from({ length: 10 }, (_, k) => createNewGroup(k + 1));
    this.datasource = new MatTableDataSource(group);
  }


 

  ngOnInit(): void {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }
}
function createNewGroup(id: number) {
  const GroupName = groupNames[Math.round(Math.random() * (groupNames.length - 1))] + ' ' +
  groupNames[Math.round(Math.random() * (groupNames.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    GroupName:GroupName,
    Description:'Added'
  };
}

