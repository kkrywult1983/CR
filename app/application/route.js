import Route from '@ember/routing/route';
import { service } from '@ember/service';

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
      birthday: '26.06.1983',
      isAdmin: true,
    };

    const user2 = {
      id: 2,
      username: 'Filip',
      password: 'aaa',
      email: 'cutmast12@interia.eu',
      photoURL:
        'https://scontent.fktw1-1.fna.fbcdn.net/v/t31.18172-8/19388315_264635764012046_390930446730227518_o.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=102&ccb=1-7&_nc_sid=85a577&_nc_ohc=SKq2rs2olYEAX9Ug1nS&_nc_ht=scontent.fktw1-1.fna&oh=00_AT-YrLxda0JKFVreieNhsmbPdhto8TqFkbdU4CAOa0kJFw&oe=62EA39E2',
      birthday: '11.03.1996',
    };

    const userModel1 = this.store.createRecord('user', user1);
    const userModel2 = this.store.createRecord('user', user2);

    await userModel1.save();
    await userModel2.save();

    const carModel_1 = {
      segment: 'SUV',
      brand: 'PEUGEOT',
      carModel: '5008 GT',
      doors: 5,
      persons: 5,
      aircondition: true,
      transmission: 'Manual',
      fuel: 'Diesel',
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_tablet/public/zdjecia_aut/peugeot_5008_0709styp_007_b.jpg?itok=RFNsYsAA',

      // rents: [rentModel, rentModel, ...]
    };

    const carModel_2 = {
      segment: 'SUV',
      brand: 'AUDI',
      carModel: 'Q5',
      doors: 5,
      persons: 7,
      aircondition: true,
      transmission: 'Automat',
      fuel: 'Benzyna',
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_tablet/public/zdjecia_aut/q5-1.jpg?itok=S40tSRca',
    };

    const carModel_3 = {
      segment: 'Klasa średnia',
      brand: 'KIA',
      carModel: 'OPTIMA',
      doors: 5,
      persons: 5,
      aircondition: true,
      transmission: 'Manual',
      fuel: 'Benzyna',
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_mobile/public/zdjecia_aut/kia-optimasportswagon-jfpewgngtlinemy19-4sssilysilver-18d_0006.jpg?itok=kxGHHWNn',
    };

    const carModel_4 = {
      segment: 'Klasa średnia',
      brand: 'TOYOTA',
      carModel: 'CAMRY',
      doors: 5,
      persons: 5,
      aircondition: true,
      transmission: 'Automat',
      fuel: 'Diesel',
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_mobile/public/zdjecia_aut/bez_tytulu_0.jpg?itok=2mEb7Gbc',
    };

    const carModel_5 = {
      segment: 'Miejski',
      brand: 'AUDI',
      carModel: 'A3 SPORTBACK',
      doors: 5,
      persons: 5,
      aircondition: true,
      transmission: 'Automat',
      fuel: 'Gas',
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_mobile/public/zdjecia_aut/a3.png?itok=UOB5NK6R',
    };

    const carModel_6 = {
      segment: 'Miejski',
      brand: 'TOYOTA',
      carModel: 'YARIS',
      doors: 5,
      persons: 4,
      aircondition: true,
      transmission: 'Manual',
      fuel: 'Benzyna',
      img: 'https://99rent.pl/sites/all/pliki/styles/slajd_flota_duzy_dekstop/public/zdjecia_aut/2017-toyota-yaris-hybrid-red-dynamic-06.jpg?itok=wAbgmqes',
    };

    const carModel1 = this.store.createRecord('car', carModel_1);
    const carModel2 = this.store.createRecord('car', carModel_2);
    const carModel3 = this.store.createRecord('car', carModel_3);
    const carModel4 = this.store.createRecord('car', carModel_4);
    const carModel5 = this.store.createRecord('car', carModel_5);
    const carModel6 = this.store.createRecord('car', carModel_6);

    await carModel1.save();
    await carModel2.save();
    await carModel3.save();
    await carModel4.save();
    await carModel5.save();
    await carModel6.save();
  }
}
