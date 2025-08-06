exports.handler = async (event, context) => {
    const animals1 = ['Лев', 'Слон', 'Жираф', 'Зебра', 'Тигр', 'Медведь', 'Волк', 'Лиса', 'Кот', 'Собака', 'Кролик', 'Хомяк'];
    const animals2 = ['Орёл', 'Сова', 'Попугай', 'Пингвин', 'Фламинго', 'Акула', 'Дельфин', 'Черепаха', 'Краб', 'Осьминог', 'Бабочка', 'Паук'];
    const adjectives = ['Космический', 'Радужный', 'Летающий', 'Танцующий', 'Поющий', 'Светящийся', 'Магический', 'Невидимый', 'Гигантский', 'Крохотный'];
    
    const animal1 = animals1[Math.floor(Math.random() * animals1.length)];
    const animal2 = animals2[Math.floor(Math.random() * animals2.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    
    const hybridName = `${adjective} ${animal1}-${animal2}`;
    
    const abilities = ['умеет летать на высоте 10000 метров', 'может менять цвет как хамелеон', 'поёт оперные арии', 'танцует балет', 'светится в темноте', 'телепортируется', 'читает мысли', 'дышит под водой'];
    const habitats = ['в космосе', 'на радуге', 'в облаках', 'на дне океана', 'в вулкане', 'в снежных горах', 'в джунглях будущего'];
    
    const ability = abilities[Math.floor(Math.random() * abilities.length)];
    const habitat = habitats[Math.floor(Math.random() * habitats.length)];
    
    const description = `Это удивительное создание ${ability} и обитает ${habitat}.`;
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            name: hybridName,
            description: description,
            timestamp: new Date().toISOString()
        })
    };
};