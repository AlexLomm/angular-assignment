import { Component, inject, Input, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalConfirm } from '../modal-confirm/modal.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ModalConfirm],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  firstName!: string;

  @Input()
  lastName!: string;

  @Input()
  age!: number;

  @Input()
  imageSrc!: string;

  private modalService = inject(NgbModal);

  remove() {
    this.modalService.open(ModalConfirm);
  }
}
