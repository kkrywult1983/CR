import Helper from '@ember/Component/helper';

export default class Currency extends Helper {
  compute(params, hash = {}) {
    const [number] = params;
    const { sign = 'zł' } = hash;

    const pln = Math.floor(number);
    let grose = Math.floor((number * 100) % 100);

    if (grose.toString().length === 1) {
      grose = '0' + grose;
    }

    return `${pln}.${grose} ${sign}`;
  }
}
