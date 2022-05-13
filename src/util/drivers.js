const f1Drivers = [
  {
    number: '16',
    name: 'Charles Leclerc',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1536.medium.jpg/1646818893219.jpg',
  },
  {
    number: '1',
    name: 'Max Verstappen',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1536.medium.jpg/1646819045507.jpg',
  },
  {
    number: '11',
    name: 'Sergio Perez',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/image.img.1536.medium.jpg/1646819228700.jpg',
  },
  {
    number: '64',
    name: 'George Russell',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/image.img.1536.medium.jpg/1646750994602.jpg',
  },
  {
    number: '55',
    name: 'Carlos Sainz',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.1536.medium.jpg/1646818866749.jpg',
  },
  {
    number: '44',
    name: 'Lewis Hamilton',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1536.medium.jpg/1647334259839.jpg',
  },
  {
    number: '4',
    name: 'Lando Norris',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/image.img.1024.medium.jpg/1646819013197.jpg',
  },
  {
    number: '3',
    name: 'Daniel Ricciardo',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.1024.medium.jpg/1646818924510.jpg',
  },
  {
    number: '77',
    name: 'Valtteri Bottas',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1024.medium.jpg/1646819266274.jpg',
  },
  {
    number: '24',
    name: 'Zhou Guanyu',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/guanyu-zhou/_jcr_content/image.img.1024.medium.jpg/1646818979975.jpg',
  },
  {
    number: '22',
    name: 'Yuki Tsunoda',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/yuki-tsunoda/_jcr_content/image.img.1024.medium.jpg/1648134405786.jpg',
  },
  {
    number: '10',
    name: 'Pierre Gasly',
    imgUrl:
      'https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1024.medium.jpg/1646819179303.jpg',
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return f1Drivers;
};

const drivers = shuffleArray(f1Drivers);

export default drivers;
