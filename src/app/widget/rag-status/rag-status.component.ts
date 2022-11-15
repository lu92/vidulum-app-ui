import { Component, Input, OnInit } from '@angular/core';
import { RagStatus } from '../../model/RagStatus';

@Component({
  selector: 'rag-status',
  templateUrl: './rag-status.component.html',
  styleUrls: ['./rag-status.component.scss']
})
export class RagStatusComponent  {

  @Input() rag!: RagStatus;

  fun() : string {
    switch(Number(this.rag)) {

      case RagStatus.RED:
        return "rag-red";

      case RagStatus.AMBER:
             return "rag-amber";

      case RagStatus.GREEN:
             return "rag-green";

       default:
        return "rag-no-color";
    }
  }
}
