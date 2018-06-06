import { Project } from './project.model';

export const PROJECTS: Project[] = [
  new Project({
    id: 1,
    name: 'Matdexon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat.',
    contractTypeId: 1,
    isActive: true,
    contractSignedOn: new Date(2015, 11, 10),
    budget: 30000,
  }),

  new Project({
    id: 2,
    name: 'Elastic Door',
    description:
      'Quisque ornare sodales feugiat. Mauris iaculis nunc vitae elit commodo lobortis. Sed dapibus, odio sit amet sodales malesuada.',
    contractTypeId: 1,
    isActive: true,
    contractSignedOn: new Date(2016, 2, 5),
    budget: 25233,
  }),
  new Project({
    id: 3,
    name: 'Remote Wrench',
    description:
      'Sed a fermentum diam. Vestibulum vel dignissim nisi, ultrices finibus odio. Sed nec tempus elit. Quisque auctor sem odio.',
    contractTypeId: 1,
    isActive: true,
    contractSignedOn: new Date(2016, 2, 5),
    budget: 25233,
  }),
  new Project({
    id: 4,
    name: 'Dusty Epsilon',
    description:
      'Nunc cursus purus malesuada, dignissim augue ac, ullamcorper turpis. Nullam efficitur odio id nulla eleifend, vel tempus.',
    contractTypeId: 1,
    isActive: true,
    contractSignedOn: new Date(2016, 2, 5),
    budget: 25233,
  }),
  new Project({
    id: 5,
    name: 'Kaylux',
    description:
      'Pellentesque eu mauris vel sem laoreet blandit ac ac erat. Morbi lorem justo, commodo at faucibus vitae, consequat.',
    contractTypeId: 1,
    isActive: true,
    contractSignedOn: new Date(2016, 2, 5),
    budget: 25233,
  }),
  new Project({
    id: 6,
    name: 'Tipis',
    description:
      'Aliquam rhoncus, libero eget feugiat rutrum, tortor sem posuere elit, scelerisque eleifend mi mi sit amet.',
    contractTypeId: 1,
    isActive: true,
    contractSignedOn: new Date(2016, 2, 5),
    budget: 25233,
  }),
  new Project({
    id: 7,
    name: 'Scarlet Weeknight',
    description:
      'Fusce quis quam eget sapien sodales iaculis. Curabitur aliquet at erat sed cursus. In hendrerit.',
    contractTypeId: 1,
    isActive: true,
    contractSignedOn: new Date(2016, 2, 5),
    budget: 25233,
  }),
];
