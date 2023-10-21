
import { v4 as uuid } from 'uuid';

export const Fleet = [
   {
      id: 1,
      model: "Titan 125CG",
      code: "M1",
      icon: '/images/frota/titan.png' ,
      marca: 'Honda',
      placa: uuid().slice(0, 3)+' '+uuid().slice(3, 7)
   },
   {
      id: 2,
      model: "Yaris",
      code: "C2",
      icon: '/images/frota/yaris.png' ,
      marca: 'Toyata',
      placa: uuid().slice(0, 3)+' '+uuid().slice(3, 7)
   },
   {
      id: 3,
      model: "Uno",
      code: "C333",
      icon: '/images/frota/uno2.png' ,
      marca: 'Fiat',
      placa: uuid().slice(0, 3)+' '+uuid().slice(3, 7)
   },
   {
      id: 4,
      model: "HB20",
      code: "C4",
      icon: '/images/frota/hb20.png' ,
      marca: 'Hunday',
      placa: uuid().slice(0, 3)+' '+uuid().slice(3, 7)
   },
   {
      id: 5,
      model: "HB20",
      code: "C4",
      icon: '/images/frota/hb20.png' ,
      marca: 'Hunday',
      placa: 'abc1236',
      placa: uuid().slice(0, 3)+' '+uuid().slice(3, 7)
   },
   {
      id: 6,
      model: "Yaris",
      code: "C22",
      icon: '/images/frota/yaris.png' ,
      marca: 'Toyata',
      placa: uuid().slice(0, 3)+' '+uuid().slice(3, 7)
   },
   {
      id: 7,
      model: "HB20",
      code: "C4",
      icon: '/images/frota/hb20.png' ,
      marca: 'Hunday',
      placa: String(uuid().slice(0, 3)+' '+uuid().slice(3, 7))
   },
   {
      id: 8,
      model: "Uno",
      code: "C5",
      icon: '/images/frota/uno2.png' ,
      marca: 'Fiat',
      placa: uuid().slice(0, 3)+' '+uuid().slice(3, 7)
   },
   {
      id: 9,
      model: "Uno",
      code: "C6",
      icon: '/images/frota/uno.png' ,
      marca: 'Fiat',
      placa: uuid().slice(0, 3)+' '+uuid().slice(3, 7)
   },

   {
      id: 10,
      model: "Uno",
      code: "C9",
      icon: '/images/frota/uno.png' ,
      marca: 'Fiat',
      placa: uuid().slice(0, 3)+' '+uuid().slice(3, 7)
   },
   {
      id: 11,
      model: "HB20",
      code: "C9",
      icon: '/images/frota/h20-write.png' ,
      marca: 'Fiat',
      placa: uuid().slice(0, 3)+' '+uuid().slice(3, 7)
   },

];
export default Fleet;
