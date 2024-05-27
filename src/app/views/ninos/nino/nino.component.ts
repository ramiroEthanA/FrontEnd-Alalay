import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-nino',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, 
            DocsExampleComponent, FormsModule, FormDirective, FormLabelDirective, FormControlDirective
            , ButtonDirective, NgStyle, TextColorDirective, ReactiveFormsModule, FormSelectDirective
            , TableDirective, TableColorDirective, TableActiveDirective],
            
  templateUrl: './nino.component.html',
  styleUrl: './nino.component.scss'
})
export class NinoComponent {

}
