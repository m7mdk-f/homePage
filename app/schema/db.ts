export interface Doctor {
    id: number;
    name: string;
    department: string;
    price: number;
    badge?: string;
    image: string;
    Specialization: string;
    dicount?: number;
}



export const doctors = {
    ar: [
        {
            id: 1,
            name: "د.خالد النوساني نفذت",
            Specialization: "موعد جلدية",
            department: "قسم النساء والتوليد",
            price: 200,
            image: "/Images/1.webp",
        },
        {
            id: 2,
            name: " د. عماد عيسى",
            Specialization: "موعد جلدية",
            department: "قسم الأنف والأذن",
            price: 200,
            badge: "خصم 30 ر.س",
            image: "/Images/2.webp",
        },
        {
            id: 3,
            name: " د. خالد النوساني",
            Specialization: "موعد جلدية",
            department: "قسم النساء والتوليد",
            price: 200,
            badge: "ترقبوا الموعد...",
            image: "/Images/3.webp",
        },
        {
            id: 4,
            name: " د.خالد عبدالصبور",
            Specialization: "موعد طب نفسي",
            department: "الطب النفسي",
            price: 200,
            badge: "جديد",
            image: "/Images/4.webp",
        },
        {
            id: 5,
            name: " د.خالد عيسى",
            Specialization: "موعد جلدية ",
            department: "قسم الجلدية",
            price: 200,
            image: "/Images/5.webp",
        },
        {
            id: 6,
            name: "د.أمجد الشهالي",
            Specialization: "موعد طب الأطفال",
            department: "قسم الأطفال",
            price: 130,
            dicount: 200,
            image: "/Images/6.webp",
        },
        {
            id: 7,
            name: " د.خالد عيسى",
            Specialization: "موعد جلدية ",
            department: "قسم الجلدية",
            price: 200,
            image: "/Images/7.webp",
        },
        {
            id: 8,
            name: "د.أمجد الشهالي",
            Specialization: "موعد طب الأطفال",
            department: "قسم الأطفال",
            price: 130,
            dicount: 200,
            image: "/Images/8.webp",
        }
    ],
    en: [
        {
            id: 1,
            name: "Dr. Khaled Al-Nosani",
            Specialization: "Dermatology Appointment",
            department: "Obstetrics and Gynecology",
            price: 200,
            image: "/Images/1.webp",
        },
        {
            id: 2,
            name: "Dr. Emad Issa",
            Specialization: "Dermatology Appointment",
            department: "Ear, Nose, and Throat",
            price: 200,
            badge: "30 SAR Discount",
            image: "/Images/2.webp",
        },
        {
            id: 3,
            name: "Dr. Khaled Al-Nosani",
            Specialization: "Dermatology Appointment",
            department: "Obstetrics and Gynecology",
            price: 200,
            badge: "Stay tuned for the appointment...",
            image: "/Images/3.webp",
        },
        {
            id: 4,
            name: "Dr. Khaled Abdel-Sabour",
            Specialization: "Psychiatry Appointment",
            department: "Psychiatry",
            price: 200,
            badge: "New",
            image: "/Images/4.webp",
        },
        {
            id: 5,
            name: "Dr. Khaled Issa",
            Specialization: "Dermatology Appointment",
            department: "Dermatology",
            price: 200,
            image: "/Images/5.webp",
        },
        {
            id: 6,
            name: "Dr. Amjad Al-Shahali",
            Specialization: "Pediatric Appointment",
            department: "Pediatrics",
            price: 130,
            dicount: 200,
            image: "/Images/6.webp",
        },
        {
            id: 7,
            name: "Dr. Khaled Issa",
            Specialization: "Dermatology Appointment",
            department: "Dermatology",
            price: 200,
            image: "/Images/7.webp",
        },
        {
            id: 8,
            name: "Dr. Amjad Al-Shahali",
            Specialization: "Pediatric Appointment",
            department: "Pediatrics",
            price: 130,
            dicount: 200,
            image: "/Images/8.webp",
        }
    ]
};
