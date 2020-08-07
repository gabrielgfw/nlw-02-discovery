// Importing database configuration. //
const Database = require('./database/db');

// Importing utils format information. // 
const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('./utils/format');

// ROUTES INFO:
// 'req' is basically the info you are sending to the endpoint 
// 'res' is the return of this endpoint

// Main Page config //
function pageLanding(req, res) {
    return res.render("index.html")
}

// Study Page config //
async function pageStudy(req, res) {
    const filters = req.query;

    // cheking for any empty value. // 
    if(!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", { filters, subjects, weekdays })
    }

    // convert hours to minutes. //
    const timeToMinutes = convertHoursToMinutes(filters.time);

    const query = `
        SELECT classes.*, proffys.*
          FROM proffys
          JOIN classes ON (classes.proffy_id = proffys.id)
         WHERE EXISTS(
            SELECT class_schedule.*
              FROM class_schedule
             WHERE class_schedule.class_id = classes.id
               AND class_schedule.weekday = ${filters.weekday}
               AND class_schedule.time_from <= ${timeToMinutes}
               AND class_schedule.time_to > ${timeToMinutes}
         )
           AND classes.subject = '${filters.subject}';
    `;

    // In case of any error occurred during the select statement. //
    try {
        // Waiting for the database being connected. //
        const db = await Database;
        const proffys = await db.all(query);

        return res.render('study.html', { proffys, subjects, filters, weekdays })

    } catch (error) {
        console.log(error);
    }
}


// Give-Classes Page Config //
function pageGiveClasses(req, res) {

    // Storing the data that we are sending through the 'req' parameter //
    // basically this 'req' will have all form data from the Give-Classes //
    // when the 'save' button is clicked. //
    const data = req.query;
    // Checking if the data returned is not null (empty) //
    const isNotEmpty = Object.keys(data).length > 0;

    // If the data is complete, we are going to record this new Proffy user //
    if(isNotEmpty) {
        // Consulting the name of the subject, using the function bellow. //
        data.subject = getSubject(data.subject);
        // Pushing the new data into the Proffys array. //
        proffys.push(data);
        // Redirect to the Study page. //
        return res.redirect("/study");
    }
    
    return res.render("give-classes.html", { subjects, weekdays })
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}