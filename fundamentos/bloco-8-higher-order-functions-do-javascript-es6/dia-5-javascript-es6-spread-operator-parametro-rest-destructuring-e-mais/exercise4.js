const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
];

// escreva filterPeople abaixo

console.log(people[1].name)

people.filter(({ name, bornIn, nationality }) => {
    if (nationality === 'Australian' && bornIn > 1990 && bornIn <= 2000) console.log(name); 
});
