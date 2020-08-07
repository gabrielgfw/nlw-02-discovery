module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {  
    // --------------------------- //
    // insert into proffy's table. //
    // --------------------------- //
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `);
    // Taking the Proffy ID. //
    const proffy_id = insertedProffy.lastID

    // ------------------------ //
    // insert into class' table //
    // ------------------------ //
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)
    // Taking the class ID. //
    const class_id = insertedClass.lastID;

    // --------------------------- //
    // insert into schedules table //
    // --------------------------- //
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    await Promise.all(insertedAllClassScheduleValues);


}