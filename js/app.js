const date = new Date()
const monthDays = document.querySelector('.days')

const renderCalendar = () => {
    monthDays.classList.remove('_fade')
    monthDays.classList.remove('_prev')
    monthDays.classList.remove('_next')
    // date.setDate(1)

    const firstDayIndex = date.getDay()
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()

    const nextDays = 6 - lastDayIndex

    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ]

    document.querySelector('h1').innerText = months[date.getMonth()]
    document.querySelector('h2').innerText = date.getFullYear()
    document.querySelector('p').innerText = new Date().toDateString()

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    }

    for (let i = 1; i <= lastDay; i++) {
        // if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        if (i === new Date().getDate() 
        && date.getMonth() === new Date().getMonth() 
        && date.getFullYear() === new Date().getFullYear()) {
            days += `<div class="today">${i}</div>`
        } else {
            days += `<div>${i}</div>`
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`
    }
    monthDays.innerHTML = days
}

document.querySelector('.prev').addEventListener('click', () => {
    monthDays.classList.add('_prev')
    monthDays.classList.add('_fade')

    setTimeout(() => {
        date.setMonth(date.getMonth() - 1)  
        renderCalendar()
    }, 200)
})

document.querySelector('.next').addEventListener('click', () => {
    monthDays.classList.add('_next')
    monthDays.classList.add('_fade')

    setTimeout(() => {
        date.setMonth(date.getMonth() + 1)
        renderCalendar()
    }, 200)
})

renderCalendar()
