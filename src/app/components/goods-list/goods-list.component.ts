import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { GoodService } from 'src/app/services/good.service';
import { Good } from 'src/app/models/good.interface';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnChanges {

  @Input() goods: Good[];
  @Input() label: string;
  // tslint:disable-next-line:no-output-native
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnChanges(changes) {
  }


  // @Input() public set goodsInput(goods: Array<Good>) {
  //   this.goods = goods;
  // }
  // @Output() public selectedGood = new EventEmitter<Good>();
  // @Output() public removedGood = new EventEmitter<Good>();

  // public goods: Array<Good>;

  // constructor(private goodService: GoodService) { }

  // public selectGood(good: Good): void {
  //   this.selectedGood.emit(good);
  // }

  // public deleteGood(goodToRemove: Good): void {
  //   this.goodService.delete(goodToRemove.id).subscribe(
  //     () => {
  //       this.removedGood.emit(goodToRemove);
  //     }
  //   );
  // }
}
