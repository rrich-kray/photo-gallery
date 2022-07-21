const User = require('../models/User');

const userData = [
  {
    first_name: 'John',
    last_name: 'Smith',
    email: 'johnsmith@gmail.com',
    bio: `Aliqua commodo et irure tempor. Esse cupidatat et sit ad aliqua eiusmod velit culpa commodo mollit cillum sint nisi. Occaecat elit pariatur culpa mollit proident proident officia enim non velit in incididunt et ipsum. Do eiusmod labore sit labore cupidatat consequat ea cupidatat mollit. Dolor tempor id exercitation exercitation est et dolore adipisicing. Id elit eu eu exercitation dolore in irure excepteur anim enim labore consectetur laborum sit. Velit voluptate non sit cillum do consequat laborum sint nisi sint velit.
          Anim amet eiusmod eiusmod sint. Occaecat et mollit aliquip amet minim eiusmod cupidatat magna. Esse nisi cillum proident ad veniam aute velit fugiat cupidatat excepteur consectetur pariatur Lorem laboris.`,
    password: 'password',
  },
  {
    first_name: 'Joe',
    last_name: 'Smith',
    email: 'joesmith@gmail.com',
    bio: `Aliqua commodo et irure tempor. Esse cupidatat et sit ad aliqua eiusmod velit culpa commodo mollit cillum sint nisi. Occaecat elit pariatur culpa mollit proident proident officia enim non velit in incididunt et ipsum. Do eiusmod labore sit labore cupidatat consequat ea cupidatat mollit. Dolor tempor id exercitation exercitation est et dolore adipisicing. Id elit eu eu exercitation dolore in irure excepteur anim enim labore consectetur laborum sit. Velit voluptate non sit cillum do consequat laborum sint nisi sint velit.
          Anim amet eiusmod eiusmod sint. Occaecat et mollit aliquip amet minim eiusmod cupidatat magna. Esse nisi cillum proident ad veniam aute velit fugiat cupidatat excepteur consectetur pariatur Lorem laboris.`,
    password: 'password',
  },
  {
    first_name: 'Kevin',
    last_name: 'Smith',
    email: 'kevinsmith@gmail.com',
    bio: `Aliqua commodo et irure tempor. Esse cupidatat et sit ad aliqua eiusmod velit culpa commodo mollit cillum sint nisi. Occaecat elit pariatur culpa mollit proident proident officia enim non velit in incididunt et ipsum. Do eiusmod labore sit labore cupidatat consequat ea cupidatat mollit. Dolor tempor id exercitation exercitation est et dolore adipisicing. Id elit eu eu exercitation dolore in irure excepteur anim enim labore consectetur laborum sit. Velit voluptate non sit cillum do consequat laborum sint nisi sint velit.
          Anim amet eiusmod eiusmod sint. Occaecat et mollit aliquip amet minim eiusmod cupidatat magna. Esse nisi cillum proident ad veniam aute velit fugiat cupidatat excepteur consectetur pariatur Lorem laboris.`,
    password: 'password',
  },
  {
    first_name: 'Jim',
    last_name: 'Smith',
    email: 'jimsmith@gmail.com',
    bio: `Aliqua commodo et irure tempor. Esse cupidatat et sit ad aliqua eiusmod velit culpa commodo mollit cillum sint nisi. Occaecat elit pariatur culpa mollit proident proident officia enim non velit in incididunt et ipsum. Do eiusmod labore sit labore cupidatat consequat ea cupidatat mollit. Dolor tempor id exercitation exercitation est et dolore adipisicing. Id elit eu eu exercitation dolore in irure excepteur anim enim labore consectetur laborum sit. Velit voluptate non sit cillum do consequat laborum sint nisi sint velit.
          Anim amet eiusmod eiusmod sint. Occaecat et mollit aliquip amet minim eiusmod cupidatat magna. Esse nisi cillum proident ad veniam aute velit fugiat cupidatat excepteur consectetur pariatur Lorem laboris.`,
    password: 'password',
  },
  {
    first_name: 'Jane',
    last_name: 'Smith',
    email: 'janesmith@gmail.com',
    bio: `Aliqua commodo et irure tempor. Esse cupidatat et sit ad aliqua eiusmod velit culpa commodo mollit cillum sint nisi. Occaecat elit pariatur culpa mollit proident proident officia enim non velit in incididunt et ipsum. Do eiusmod labore sit labore cupidatat consequat ea cupidatat mollit. Dolor tempor id exercitation exercitation est et dolore adipisicing. Id elit eu eu exercitation dolore in irure excepteur anim enim labore consectetur laborum sit. Velit voluptate non sit cillum do consequat laborum sint nisi sint velit.
          Anim amet eiusmod eiusmod sint. Occaecat et mollit aliquip amet minim eiusmod cupidatat magna. Esse nisi cillum proident ad veniam aute velit fugiat cupidatat excepteur consectetur pariatur Lorem laboris.`,
    password: 'password',
  },
  {
    first_name: 'Jimmy',
    last_name: 'Smith',
    email: 'jimmysmith@gmail.com',
    bio: `Aliqua commodo et irure tempor. Esse cupidatat et sit ad aliqua eiusmod velit culpa commodo mollit cillum sint nisi. Occaecat elit pariatur culpa mollit proident proident officia enim non velit in incididunt et ipsum. Do eiusmod labore sit labore cupidatat consequat ea cupidatat mollit. Dolor tempor id exercitation exercitation est et dolore adipisicing. Id elit eu eu exercitation dolore in irure excepteur anim enim labore consectetur laborum sit. Velit voluptate non sit cillum do consequat laborum sint nisi sint velit.
          Anim amet eiusmod eiusmod sint. Occaecat et mollit aliquip amet minim eiusmod cupidatat magna. Esse nisi cillum proident ad veniam aute velit fugiat cupidatat excepteur consectetur pariatur Lorem laboris.`,
    password: 'password',
  },
  {
    first_name: 'Mike',
    last_name: 'Smith',
    email: 'mikesmith@gmail.com',
    bio: `Aliqua commodo et irure tempor. Esse cupidatat et sit ad aliqua eiusmod velit culpa commodo mollit cillum sint nisi. Occaecat elit pariatur culpa mollit proident proident officia enim non velit in incididunt et ipsum. Do eiusmod labore sit labore cupidatat consequat ea cupidatat mollit. Dolor tempor id exercitation exercitation est et dolore adipisicing. Id elit eu eu exercitation dolore in irure excepteur anim enim labore consectetur laborum sit. Velit voluptate non sit cillum do consequat laborum sint nisi sint velit.
          Anim amet eiusmod eiusmod sint. Occaecat et mollit aliquip amet minim eiusmod cupidatat magna. Esse nisi cillum proident ad veniam aute velit fugiat cupidatat excepteur consectetur pariatur Lorem laboris.`,
    password: 'password',
  },
  {
    first_name: 'Ken',
    last_name: 'Smith',
    email: 'kensmith@gmail.com',
    bio: `Aliqua commodo et irure tempor. Esse cupidatat et sit ad aliqua eiusmod velit culpa commodo mollit cillum sint nisi. Occaecat elit pariatur culpa mollit proident proident officia enim non velit in incididunt et ipsum. Do eiusmod labore sit labore cupidatat consequat ea cupidatat mollit. Dolor tempor id exercitation exercitation est et dolore adipisicing. Id elit eu eu exercitation dolore in irure excepteur anim enim labore consectetur laborum sit. Velit voluptate non sit cillum do consequat laborum sint nisi sint velit.
          Anim amet eiusmod eiusmod sint. Occaecat et mollit aliquip amet minim eiusmod cupidatat magna. Esse nisi cillum proident ad veniam aute velit fugiat cupidatat excepteur consectetur pariatur Lorem laboris.`,
    password: 'password',
  },
  {
    first_name: 'Keith',
    last_name: 'Smith',
    email: 'keithsmith@gmail.com',
    bio: `Aliqua commodo et irure tempor. Esse cupidatat et sit ad aliqua eiusmod velit culpa commodo mollit cillum sint nisi. Occaecat elit pariatur culpa mollit proident proident officia enim non velit in incididunt et ipsum. Do eiusmod labore sit labore cupidatat consequat ea cupidatat mollit. Dolor tempor id exercitation exercitation est et dolore adipisicing. Id elit eu eu exercitation dolore in irure excepteur anim enim labore consectetur laborum sit. Velit voluptate non sit cillum do consequat laborum sint nisi sint velit.
          Anim amet eiusmod eiusmod sint. Occaecat et mollit aliquip amet minim eiusmod cupidatat magna. Esse nisi cillum proident ad veniam aute velit fugiat cupidatat excepteur consectetur pariatur Lorem laboris.`,
    password: 'password',
  },
  {
    first_name: 'Johnny',
    last_name: 'Smith',
    email: 'johnnysmith@gmail.com',
    bio: `Aliqua commodo et irure tempor. Esse cupidatat et sit ad aliqua eiusmod velit culpa commodo mollit cillum sint nisi. Occaecat elit pariatur culpa mollit proident proident officia enim non velit in incididunt et ipsum. Do eiusmod labore sit labore cupidatat consequat ea cupidatat mollit. Dolor tempor id exercitation exercitation est et dolore adipisicing. Id elit eu eu exercitation dolore in irure excepteur anim enim labore consectetur laborum sit. Velit voluptate non sit cillum do consequat laborum sint nisi sint velit.
          Anim amet eiusmod eiusmod sint. Occaecat et mollit aliquip amet minim eiusmod cupidatat magna. Esse nisi cillum proident ad veniam aute velit fugiat cupidatat excepteur consectetur pariatur Lorem laboris.`,
    password: 'password',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
