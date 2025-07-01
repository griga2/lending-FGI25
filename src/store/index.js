import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
    
    const events = ref([
        {
            maninamev:'Николай Александров',
            date:3,
            mounth: 0,
            time: '18:00',
            name: 'Русский язык - дорога к Богу',
            desp: 'Беседа',
            img: 'AlexandrowImg'
        },{
            maninamev:'Руслан Махов',
            date:4,
            mounth: 0,
            time: '19:00',
            name: 'Ведущий радио "Серебряный дождь" ',
            desp: 'Публичные чтения',
            img: 'MahovImg'
        },{
            maninamev:'Евгения Пельтек',
            date: 8,
            mounth: 0,
            time: '18:00',
            name: 'Композиция и конфликт текста: из хаоса в космос',
            desp: 'Лекция для писателей',
            img:'PaltekImg'
        },{
            maninamev:'Михаил Хлебников',
            date:9,
            mounth: 0,
            time: '19:00',
            name: '13 шагов к литературному краху',
            desp: 'Беседа',
            img: 'HlebnikovImg'
        },{
            maninamev:'Роман Манжосов, Мария Денисенко',
            date: 10,
            mounth: 0,
            time: '19:00',
            name: 'Ира, Маша и Оля едут в Москву',
            desp: 'Перформанс в Трамвае №13',
            img: 'ManchopovImg'
        },{
            maninamev:'Публичные чтения',
            date:11,
            mounth: 0,
            time: '19:00',
            name: 'Наталья Дудинова',
            desp: 'президент Альфа-клуба',
            img: 'DydinovaImg'
        },{
            maninamev:'Ольга Харитонова',
            date:12,
            mounth: 0,
            time: '18:00',
            name: 'Как подружить в тексте реальность и вымысел. Работаем с деталью. ',
            desp: 'Мастер-класс для писателей',
            img: 'HarotonImg'
        },{
            maninamev:'Константин Голодяев',
            date: 15,
            mounth: 0,
            time: '19:00',
            name: 'Литературный квест по писательским местам',
            desp: 'Лекция-квиз',
            img: 'GolodyeImg'
        },{
            maninamev:'Лариса Назаров, Галина Галямина',
            date:16,
            mounth: 0,
            time: '19:00',
            name: 'Новосибирск археологический',
            desp: 'Лекция',
            img: 'LVGGI'   
        },{
            maninamev:'Игорь Маранин',
            date: 17,
            mounth: 0,
            time: '19:00',
            name: 'Новосибирск как сюжет',
            desp: 'Лекция для писателей',
            img: 'MaraninImg'
        },{
            maninamev:'Публичные чтения',
            date:18,
            mounth: 0,
            time: '19:00',
            name: 'Павел Волокитин',
            desp: 'начальник Управления инвестиций Новосибирской области',
            img: 'VolokitinImg'
        },{
            maninamev:'Лидия Королева',
            date:20,
            mounth: 0,
            time: '16:00',
            name: 'Экскурсия для писателей "Левобережный Соцгород"',
            desp: null,
            img: 'SocGorodImg'
        },{
            maninamev:'Евгения Пельтек',
            date:22,
            mounth: 0,
            time: '18:00',
            name: 'Диагностика темы и способ расписаться. Упражнение «Тексты без стыда и совести»',
            desp: 'Практическое занятие для писателей',
            img:'PaltekImg'
        },{
            maninamev:'Алена Селютина',
            date:23,
            mounth: 0,
            time: '19:00',
            name: '',
            desp: "Творческая встреча с писателем",
            img: 'SelutinaImg'
        },{
            maninamev:'Анна Лунева\nНаталия Колмакова',
            date:24,
            mounth: 0,
            time: '19:00',
            name: '',
            desp: 'Творческая встреча с писателями',
            img:'LunImg'
        },{
            maninamev:'Публичные чтения',
            date:25,
            mounth: 0,
            time: '19:00',
            name: 'Елена Коркман',
            desp: 'HR Сибирской генерирующей компании',
            img: 'KorkmanImg'
        },{
            maninamev:'Ольга Харитонова',
            date: 26,
            mounth: 0,
            time: '18:00',
            name: 'Структура рассказа. Что помогает написать рассказ?',
            desp: 'Мастер-класс для писателей',
            img: 'HarotonImg'
        },{
            maninamev:'Артемий Кашуба',
            date:29,
            mounth: 0,
            time: '19:00',
            name: 'Прошлое, настоящее, будущее сибирской литературы',
            desp: 'Лекция',
            img: "DedImg"
        },{
            maninamev:'Экскурсия для писателей',
            date:30,
            mounth: 0,
            time: '19:00',
            name: 'ГЦИНК им. Н. П. Литвинова',
            desp: '',
            img: "BibImg"
        },{
            maninamev:'Лариса Назаров, Галина Галямина',
            date:31,
            mounth: 0,
            time: '19:00',
            name: 'Новосибирск археологический',
            desp: 'Лекция',
            img: 'LVGGI'
        }
    ])
    
    return {
        events
    }
})