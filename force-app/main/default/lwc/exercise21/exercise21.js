import { LightningElement } from 'lwc';

export default class Exercise21 extends LightningElement {
    handleClick() {
        const propertiesSelectedEvent = new CustomEvent("propertiesselected", {
          detail: {
            añadircuenta: true,
            crearoportunidad: false,
            datosextra: [   
                {producto: "Llave",Cantidad: 1},
                {producto: "Destornillador",Cantidad: 3},
                {producto: "Tuerca",Cantidad: 100}],
            idContacto:"1341243fff"
          }
        });
    
        this.dispatchEvent(propertiesSelectedEvent);
      }
}