document.addEventListener('DOMContentLoaded', () => {
    // Voorbeelddata
    const announcements = [
        'Welkom op het intranet!',
        'Nieuwe projectdocumentatie is beschikbaar.',
    ];

    const tasks = [
        'Voltooi timesheets',
        'Plan teamvergadering',
    ];

    const announcementList = document.getElementById('announcement-list');
    announcements.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        announcementList.appendChild(p);
    });

    const taskList = document.getElementById('task-list');
    tasks.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        taskList.appendChild(li);
    });
});
