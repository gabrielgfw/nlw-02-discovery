const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
    // Insert Data. //
    proffyValue = { 
        name: "Gabriel Werner", 
        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGDtZsgpNXKyA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=yVdF_29MAo8hbXaMx88w51KhBPVvjkiw1pkduWTF7hU", 
        whatsapp: "98989-8989",
        bio: "Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    };

    classValue = {
        subject: "Química",
        cost: "20"
    };

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ];

    // await createProffy(db, {proffyValue, classValue, classScheduleValues});
    // Select statements. //
    const selectedProffys = await db.all("SELECT * FROM proffys");
    //console.log(selectedProffys);

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
          FROM proffys
          JOIN classes ON (classes.proffy_id = proffys.id)
         WHERE classes.proffy_id = 1;
    `)
    console.log(selectedClassesAndProffys);

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
          FROM class_schedule
         WHERE class_schedule.class_id = 1
           AND class_schedule.weekday = 0
           AND class_schedule.time_from <= 520
           AND class_schedule.time_to > 520;
    `)

    console.log(selectedClassesSchedules)
});