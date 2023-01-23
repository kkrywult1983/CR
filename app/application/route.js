import Route from '@ember/routing/route';
import { service } from '@ember/service';
import moment from 'moment';

export default class ApplicationRoute extends Route {
  @service store;

  async beforeModel() {
    const user1 = {
      id: 1,
      username: 'Kamil',
      password: '123',
      email: 'cutmaster12@interia.pl',
      photoURL:
        'https://i1.sndcdn.com/avatars-000279018289-rkoa3r-t500x500.jpg',
      birthday: '1983-06-26',
      isAdmin: true,
    };

    const user2 = {
      id: 2,
      username: 'Filip',
      password: 'aaa',
      email: 'cutmast12@interia.eu',
      photoURL:
        'https://scontent.fktw1-1.fna.fbcdn.net/v/t31.18172-8/19388315_264635764012046_390930446730227518_o.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=102&ccb=1-7&_nc_sid=85a577&_nc_ohc=SKq2rs2olYEAX9Ug1nS&_nc_ht=scontent.fktw1-1.fna&oh=00_AT-YrLxda0JKFVreieNhsmbPdhto8TqFkbdU4CAOa0kJFw&oe=62EA39E2',
      birthday: '1996-03-12',
    };

    const userModel1 = this.store.createRecord('user', user1);
    const userModel2 = this.store.createRecord('user', user2);

    await userModel1.save();
    await userModel2.save();

    const carModel_1 = {
      id: 1,
      segment: 'SUV',
      brand: 'PEUGEOT',
      carModel: '5008 GT',
      doors: 5,
      seats: 5,
      aircondition: true,
      transmission: 'Manual',
      fuel: 'Diesel',
      dayRentPrice: 140,
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_tablet/public/zdjecia_aut/peugeot_5008_0709styp_007_b.jpg?itok=RFNsYsAA',
      subscript:
        '7-miejscowy SUV PEUGEOT 5008 ma nowoczesną sylwetkę o eleganckich, dojrzałych kształtach, która jest wyrazem równowagi pomiędzy siłą i wysublimowaniem.',

      rents: [
        {
          from: moment('2023-04-01 00:00').toDate(),
          to: moment('2023-04-12 00:00').toDate(),
        },
        {
          from: moment('2023-04-16 00:00').toDate(),
          to: moment('2023-04-28 00:00').toDate(),
        },
      ],
    };

    const carModel_2 = {
      id: 2,
      segment: 'SUV',
      brand: 'AUDI',
      carModel: 'Q5',
      doors: 5,
      seats: 7,
      aircondition: true,
      transmission: 'Automat',
      fuel: 'Benzyna',
      dayRentPrice: 120,
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_tablet/public/zdjecia_aut/q5-1.jpg?itok=S40tSRca',
      subscript:
        'To pierwszy w segmencie premium SUV o napędzie hybrydowym, w którym seryjnie montowany jest akumulator litowo-jonowy. Napęd stanowią silnik 2.0 TFSI o mocy 155 kW (211 KM) i silnik elektryczny o mocy do 40 kW (54 KM)',
      rents: [
        {
          from: moment('2023-02-03 12:00').toDate(),
          to: moment('2023-02-12 22:00').toDate(),
        },
        {
          from: moment('2023-02-16 10:00').toDate(),
          to: moment('2023-02-18 15:00').toDate(),
        },
      ],
    };

    const carModel_3 = {
      id: 3,
      segment: 'Klasa średnia',
      brand: 'KIA',
      carModel: 'OPTIMA',
      doors: 5,
      seats: 5,
      aircondition: true,
      transmission: 'Manual',
      fuel: 'Benzyna',
      dayRentPrice: 130,
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_mobile/public/zdjecia_aut/kia-optimasportswagon-jfpewgngtlinemy19-4sssilysilver-18d_0006.jpg?itok=kxGHHWNn',
      subscript:
        'Kia Optima to auto osobowe klasy średniej pochodzące z koreańskiej stajni Kia Motors. Światło dzienne model ten ujrzał w 2000 roku, a dwie pierwsze generacje Kii Optimy nosiły również nazwę Kia Magentis. ',
      rents: [
        {
          from: moment('2023-09-03 12:00').toDate(),
          to: moment('2023-09-12 22:00').toDate(),
        },
        {
          from: moment('2023-12-20 10:00').toDate(),
          to: moment('2023-12-22 15:00').toDate(),
        },
      ],
    };

    const carModel_4 = {
      id: 4,
      segment: 'Klasa średnia',
      brand: 'TOYOTA',
      carModel: 'CAMRY',
      doors: 5,
      seats: 5,
      aircondition: true,
      transmission: 'Automat',
      fuel: 'Diesel',
      dayRentPrice: 140,
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_mobile/public/zdjecia_aut/bez_tytulu_0.jpg?itok=2mEb7Gbc',
      subscript:
        'Toyota Camry to spektakularny triumf nowoczesnego podejścia do projektowania samochodów. Dynamiczny i wydajny silnik 2.5 Hybrid Dynamic Force 218 KM e-CVT.',
      rents: [
        {
          from: moment('2023-06-03 12:00').toDate(),
          to: moment('2023-06-12 22:00').toDate(),
        },
        {
          from: moment('2023-07-16 10:00').toDate(),
          to: moment('2023-08-16 15:00').toDate(),
        },
      ],
    };

    const carModel_5 = {
      id: 5,
      segment: 'Miejski',
      brand: 'AUDI',
      carModel: 'A3 SPORTBACK',
      doors: 5,
      seats: 5,
      aircondition: true,
      transmission: 'Automat',
      fuel: 'Gas',
      dayRentPrice: 170,
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_mobile/public/zdjecia_aut/a3.png?itok=UOB5NK6R',
      subscript:
        'Audi A3 I zostało zaprezentowane po raz pierwszy w 1996 roku. Samochód otrzymał kod fabryczny 8L. Auto oferowano z kilkoma konstrukcjami silników.',
      rents: [
        {
          from: moment('2023-03-03 12:00').toDate(),
          to: moment('2023-03-12 22:00').toDate(),
        },
        {
          from: moment('2023-01-16 10:00').toDate(),
          to: moment('2023-02-20 15:00').toDate(),
        },
      ],
    };

    const carModel_6 = {
      id: 6,
      segment: 'Miejski',
      brand: 'TOYOTA',
      carModel: 'YARIS',
      doors: 5,
      seats: 4,
      aircondition: true,
      transmission: 'Manual',
      fuel: 'Benzyna',
      dayRentPrice: 125,
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_duzy_dekstop/public/zdjecia_aut/2017-toyota-yaris-hybrid-red-dynamic-06.jpg?itok=wAbgmqes',
      subscript:
        'Silniki Toyoty Yaris charakteryzują się pojemnością 998 – 1798 cm3 oraz mocą 65 – 212 KM. Auto przyspiesza do 100 km/h w 10,8 – 15,3 s, a maksymalną prędkością, jaką może osiągnąć, jest 155 – 175 km/h.',
      rents: [
        {
          from: moment('2023-09-04 12:00').toDate(),
          to: moment('2023-09-22 22:00').toDate(),
        },
      ],
    };

    const carModel1 = await this.store.createRecord('car', carModel_1);
    const carModel2 = await this.store.createRecord('car', carModel_2);
    const carModel3 = await this.store.createRecord('car', carModel_3);
    const carModel4 = await this.store.createRecord('car', carModel_4);
    const carModel5 = await this.store.createRecord('car', carModel_5);
    const carModel6 = await this.store.createRecord('car', carModel_6);

    await carModel1.save();
    await carModel2.save();
    await carModel3.save();
    await carModel4.save();
    await carModel5.save();
    await carModel6.save();
  }
}
