export interface Doctor {
    id: number;
    name: string;
    department: string;
    price: number;
    badge?: string;
    image: string[];
    Specialization: string;
    dicount?: number;
}

export interface Comment {
    id: number;
    name: string;
    avatar: string;
    comment: string;
    timeAgo: string;
}
export interface cardsData {
    id: number,
    image: string
    date: string,
    title: string,
    description: string

}

export const cardsData = {
    "ar": [
        {
            "id": 1,
            "image": "/Images/section1.webp",
            "date": "الإثنين، 24 يوليو 2023",
            "title": "توليد هذا النص من مولد النص العربي هذا النص هو",
            "description": "هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر فى نفس المساحة , لقد تم توليد هذا النص من مولد النص العربي",
        },
        {
            "id": 2,
            "image": "/Images/section2.webp",
            "date": "الثلاثاء، 25 يوليو 2023",
            "title": "هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر",
            "description": "هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر فى نفس المساحة , لقد تم توليد هذا النص من مولد النص العربي",
        },
        {
            "id": 3,
            "image": "/Images/section4.webp",
            "date": "الثلاثاء، 25 يوليو 2023",
            "title": "العيادات و الاطباء ذوو الكفاءة العالية لخدمتكم بشكل يرضيكم",
            "description": "هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر فى نفس المساحة , لقد تم توليد هذا النص من مولد النص العربي",
        },
        {
            "id": 4,
            "image": "/Images/section3.webp",
            "date": "الثلاثاء، 25 يوليو 2023",
            "title": "ما هي العمليات في نفس اليوم؟",
            "description": "هذا النص هو مثال لنص يمكن أن يستبدل بنص أخر فى نفس المساحة , لقد تم توليد هذا النص من مولد النص العربي",
        },

    ],
    "en": [
        {
            "id": 1,
            "image": "/Images/section1.webp",
            "date": "Monday, July 24, 2023",
            "title": "Sample text can be replaced",
            "description": "This text is an example of a text that can be replaced with another text in the same space. This text was generated from the Arabic text generator.",

        },
        {
            "id": 2,
            "image": "/Images/section2.webp",
            "date": "Tuesday, July 25, 2023",
            "title": "Another example title",
            "description": "This text is an example of a text that can be replaced with another text in the same space. This text was generated from the Arabic text generator.",

        },
        {
            "id": 3,
            "image": "/Images/section4.webp",
            "date": "Tuesday, July 25, 2023",
            "title": "What are same-day operations?",
            "description": "This text is an example of a text that can be replaced with another text in the same space. This text was generated from the Arabic text generator.",

        },
        {
            "id": 4,
            "image": "/Images/section3.webp",
            "date": "Tuesday, July 25, 2023",
            "title": "What are same-day operations?",
            "description": "This text is an example of a text that can be replaced with another text in the same space. This text was generated from the Arabic text generator.",

        }
    ]
}
export const doctors = {
    ar: [
        {
            id: 1,
            name: "د.خالد النوساني نفذت",
            Specialization: "موعد جلدية",
            department: "قسم النساء والتوليد",
            price: 200,
            image: ["/Images/1.webp"],
        },
        {
            id: 2,
            name: " د. عماد عيسى",
            Specialization: "موعد جلدية",
            department: "قسم الأنف والأذن",
            price: 200,
            badge: "خصم 30 ر.س",
            image: ["/Images/2.webp", "/Images/4.webp", "/Images/5.webp", "/Images/2.6.png"],
        },
        {
            id: 3,
            name: " د. خالد النوساني",
            Specialization: "موعد جلدية",
            department: "قسم النساء والتوليد",
            price: 200,
            badge: "ترقبوا الموعد...",
            image: ["/Images/3.webp"],
        },
        {
            id: 4,
            name: " د.خالد عبدالصبور",
            Specialization: "موعد طب نفسي",
            department: "الطب النفسي",
            price: 200,
            badge: "جديد",
            image: ["/Images/4.webp", "/Images/5.webp", "/Images/2.6.png"],
        },
        {
            id: 5,
            name: " د.خالد عيسى",
            Specialization: "موعد جلدية ",
            department: "قسم الجلدية",
            price: 200,
            image: ["/Images/5.webp", "/Images/2.6.png"],
        },
        {
            id: 6,
            name: "د.أمجد الشهالي",
            Specialization: "موعد طب الأطفال",
            department: "قسم الأطفال",
            price: 130,
            dicount: 200,
            image: ["/Images/6.webp", "/Images/6.2.webp", "/Images/2.6.png"],
        },
        {
            id: 7,
            name: " د.خالد عيسى",
            Specialization: "موعد جلدية ",
            department: "قسم الجلدية",
            price: 200,
            image: ["/Images/7.webp", "/Images/section2.webp"],
        },
        {
            id: 8,
            name: "د.أمجد الشهالي",
            Specialization: "موعد طب الأطفال",
            department: "قسم الأطفال",
            price: 130,
            dicount: 200,
            image: ["/Images/8.webp", "/Images/2.6.png", "/Images/8.3.png"],
        }
    ],
    en: [
        {
            id: 1,
            name: "Dr. Khaled Al-Nosani",
            Specialization: "Dermatology Appointment",
            department: "Obstetrics and Gynecology",
            price: 200,
            image: ["/Images/1.webp", "/Images/1.webp", "/Images/1.webp"],
        },
        {
            id: 2,
            name: "Dr. Emad Issa",
            Specialization: "Dermatology Appointment",
            department: "Ear, Nose, and Throat",
            price: 200,
            badge: "30 SAR Discount",
            image: ["/Images/2.webp", "/Images/4.webp", "/Images/5.webp", "/Images/2.6.png"],
        },
        {
            id: 3,
            name: "Dr. Khaled Al-Nosani",
            Specialization: "Dermatology Appointment",
            department: "Obstetrics and Gynecology",
            price: 200,
            badge: "Stay tuned for the appointment...",
            image: ["/Images/3.webp"],
        },
        {
            id: 4,
            name: "Dr. Khaled Abdel-Sabour",
            Specialization: "Psychiatry Appointment",
            department: "Psychiatry",
            price: 200,
            badge: "New",
            image: ["/Images/4.webp", "/Images/5.webp", "/Images/2.6.png"],
        },
        {
            id: 5,
            name: "Dr. Khaled Issa",
            Specialization: "Dermatology Appointment",
            department: "Dermatology",
            price: 200,
            image: ["/Images/5.webp", "/Images/2.6.png"],
        },
        {
            id: 6,
            name: "Dr. Amjad Al-Shahali",
            Specialization: "Pediatric Appointment",
            department: "Pediatrics",
            price: 130,
            dicount: 200,
            image: ["/Images/6.webp", "/Images/6.2.webp", "/Images/2.6.webp"],
        },
        {
            id: 7,
            name: "Dr. Khaled Issa",
            Specialization: "Dermatology Appointment",
            department: "Dermatology",
            price: 200,
            image: ["/Images/7.webp", "/Images/section2.webp"],
        },
        {
            id: 8,
            name: "Dr. Amjad Al-Shahali",
            Specialization: "Pediatric Appointment",
            department: "Pediatrics",
            price: 130,
            dicount: 200,
            image: ["/Images/8.webp", "/Images/2.6.png", "/Images/8.3.png"],
        }
    ]
};
