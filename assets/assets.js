import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import whatsapp from './whatsapp.png';
import linkedin from './linkedin.png';
import github from './github.png';
import aws_light from './aws-light.png';
import aws_dark from './aws-dark.png';
import supabase from './supabase.png';
import jetbrains from './jetbrains.png';
import redis from './redis.png';
import postgres from './postgres.png';
import docker from './docker.png';
import n8n from './n8n.png';
import whatsapp_dark from './whatsapp-dark.png';
import linkedin_dark from './linkedin-dark.png';
import github_dark from './github-dark.png';
import usa from './usa.png';
import spain from './spain.png';
import mobile from './mobile_dev.png';
import backend from './backend_dev.png';
import ai_projects from './ai_projects.png';
import ai_automations from './ai_automations.png';

export const assets = {
    mobile,
    backend,
    ai_projects,
    ai_automations,
    usa,
    spain,  
    whatsapp_dark,
    linkedin_dark,
    github_dark,
    redis,
    postgres,
    docker,
    n8n,
    jetbrains,
    aws_light,
    aws_dark,
    whatsapp,
    linkedin,
    github,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    supabase,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

// Data for display content of own portfolio projects
export const projectsData = {
    en: [
        {
            title: "Easy Market – Awarded Thesis (Marketplace SPL)",
            description: "144 marketplace software product derivations tailored for retail businesses.",
            bg_image: "/easy-market/background.jpeg",
            long_description_1: "Small and medium-sized enterprises in Colombia face structural challenges when digitalizing their retail processes. Easy Market bridges this gap with a configurable yet cost-efficient solution that accelerates product commercialization without sacrificing customization.",
            inter_image: "/easy-market/image-1.png",
            long_description_2: "Easy Market SPL is a Software Product Line that enables **144 feature-based marketplace configurations**, empowering businesses to tailor the solution to their requirements while significantly reducing cost and time compared to custom development.",
            inter_image_2: "/easy-market/image-2.png",
            project_facts: [
                "Feature-driven Software Product Line built under a service-oriented architecture (SOA), enabling 144 marketplace combinations.",
                "Full multiplatform support (Android, iOS, Web) with Stripe integration for electronic payment processing.",
                "Real-time backend communication and location-aware services using Google Maps API and Firebase modules.",
                "Spring Boot and PostgreSQL-based backend with real-time database synchronization through Supabase."
            ],
            demo_title: "Demo — Build a Marketplace in Minutes",
            video_url: "/easy-market/demo.mp4",
            github_button_description: "Easy Market Repository",
            github_url: "https://github.com/Easy-Market-SPL"
        },
        {
            title: "Pack My Trip – 1st Place | Tourism 4.0 Hackathon",
            description: "Mobile application automating travel package acquisition using integrated APIs.",
            bg_image: "/pack-my-trip/background.jpg",
            long_description_1: "Pack My Trip accelerates the setup and validation of travel packages through a mobile interface designed to reduce friction between operators and travelers. Built during an international hackathon with multidisciplinary teams.",
            inter_image: "/pack-my-trip/image-1.png",
            inter_image_2: "/pack-my-trip/image-2.png",
            long_description_2: "The app integrates geolocation, cloud storage and itinerary handling to streamline package discovery and configuration. The project was recognized as the most valuable tourism solution in the competition.",
            project_facts: [
                "Developed with Android Studio, Kotlin and Retrofit for travel package management.",
                "Firebase Storage and Google Maps API integration for multimedia tracking and localized recommendations.",
                "REST-based backend services built in .NET for operational management.",
                "Winner: ANATO International Tourism Hackathon — PackMyTrip."
            ],
            demo_title: "Pack My Trip — Solution Demo",
            video_url: "/pack-my-trip/demo.mp4",
            github_button_description: "Pack My Trip Repository",
            github_url: "https://github.com/juanfra312003/pack-my-trip"
        },
        {
            title: "IArtificialCOL - AI Automations with No-Code",
            description: "AI automation venture co-founded to streamline business processes through workflows.",
            bg_image: "/iartificial-col/background.jpeg",
            long_description_1: "IArtificialCOL is a live venture that I co-founded with one of my best friends. Together, we design and implement AI-powered automations for companies, focusing on turning manual, repetitive workflows into scalable, observable processes that actually move business metrics.",
            inter_image: "/iartificial-col/image-1.png",
            long_description_2: "As a two-person team, we have automated key processes in two Colombian companies, a watch retail business and a hardware and scaffolding rental company, achieving around **80% improvement in response times and operational effectiveness**. We build on top of no-code platforms and API integrations to deliver fast, maintainable solutions without the overhead of fully custom development.",
            project_facts: [
                "Co-founded and actively maintained by a two-person team focused on end-to-end AI and automation projects.",
                "Implementation of AI-driven automations using no-code platforms and orchestrated integrations with existing business tools.",
                "24/7 customer service flows, including automatic routing, FAQ resolution and escalation to human agents when needed.",
                "Automatic generation of remittance and order documents directly from conversational or form-based inputs.",
                "Automated email notifications and follow-ups for key events such as new orders, updates and reminders.",
                "Agenda and appointment management integrated with real-time database logging for traceability and reporting.",
                "Real-time data capture into structured databases to enable future analytics and performance tracking."
            ],
            demo_title: "IArtificialCOL — Business Process Automations",
            video_url: "/iartificial-col/demo.mp4",
            video_portrait: true,
            instagram_button_description: "View IArtificialCOL on Instagram",
            instagram_url: "https://www.instagram.com/iartificialcol/"
        },
        {
            title: "All Connected – Software Architecture Project",
            description: "PWA connecting businesses, suppliers and students through distributed services.",
            bg_image: "/all-connected/background.jpg",
            long_description_1: "All Connected brings forward a digital environment that empowers local organizations to reach student audiences while promoting cross-segment collaboration. The architecture was shaped from real requirements gathered directly from stakeholders (real-life scenario with teacher guidance).",
            inter_image: "/all-connected/image-1.png",
            long_description_2: "The project features a service-oriented design enabling scalable evolution and modular integration. It includes multi-stack backend components (Spring Boot + .NET), a Next.js web application, and domain-driven requirement engineering.",
            project_facts: [
                "Service-oriented architecture connecting multiple actor profiles.",
                "Backend services implemented with Spring Boot and .NET across separate modules.",
                "Progressive Web Application (PWA) using Next.js with responsive behavior.",
                "Domain modeling and architectural design based on real client requirements."
            ],
            github_button_description: "All Connected Repository",
            github_url: "https://github.com/FusionTech-2430"
        },
    ],

    es: [
        {
            title: "Easy Market – Tesis Laureada (SPL de Marketplaces)",
            description: "144 derivados de software tipo marketplace para empresas de bienes tangibles.",
            bg_image: "/easy-market/background.jpeg",
            long_description_1: "Las pymes colombianas enfrentan barreras al digitalizar la venta de bienes de consumo. Easy Market ofrece una solución flexible que equilibra personalización, rapidez de implementación y viabilidad económica.",
            inter_image: "/easy-market/image-1.png",
            long_description_2: "Easy Market SPL es una Línea de Productos de Software para marketplaces con **144 combinaciones funcionales**. Cada empresa elige las características que necesita para comercializar sus productos con precisión y eficiencia, reduciendo tiempos y costos frente al desarrollo a la medida.",
            inter_image_2: "/easy-market/image-2.png",
            project_facts: [
                "Arquitectura orientada a servicios (SOA) para combinaciones basadas en características que derivan 144 soluciones funcionales.",
                "Soporte multiplataforma con aplicaciones en Android, iOS y web, integrando Stripe para cobros electrónicos en tiempo real.",
                "Servicios de geolocalización con Google Maps API e integración con Firebase (Realtime Database, Storage, Authentication).",
                "Back-end en Spring Boot con PostgreSQL y sincronización en tiempo real usando Supabase."
            ],
            demo_title: "Demo — Crear un marketplace en minutos",
            video_url: "/easy-market/demo.mp4",
            github_button_description: "Repositorio Easy Market",
            github_url: "https://github.com/Easy-Market-SPL"
        },
        {
            title: "Pack My Trip – Ganador Hackathon ANATO Turismo 4.0",
            description: "Aplicación móvil para automatizar y comercializar paquetes turísticos con servicios externos.",
            bg_image: "/pack-my-trip/background.jpg",
            long_description_1: "Pack My Trip reduce la fricción entre viajeros y operadores turísticos mediante una app móvil que agiliza la cotización, personalización y selección de destinos. Se diseñó y desarrolló durante una hackathon internacional de Turismo 4.0.",
            inter_image: "/pack-my-trip/image-1.png",
            inter_image_2: "/pack-my-trip/image-2.png",
            long_description_2: "La solución integra búsquedas geolocalizadas, almacenamiento multimedia y gestión de itinerarios para facilitar el descubrimiento de paquetes y la toma de decisiones informada. El proyecto fue reconocido como la solución más valiosa para el negocio turístico.",
            project_facts: [
                "Desarrollada con Android Studio, Kotlin y Retrofit para la gestión de paquetes turísticos.",
                "Integración con Firebase Storage y Google Maps API para contenido multimedia y recomendaciones basadas en ubicación.",
                "Servicios REST en .NET para soportar la operación y administración de los paquetes.",
                "Proyecto ganador de la Hackathon Internacional ANATO Turismo 4.0."
            ],
            demo_title: "Pack My Trip — Demo de la solución",
            video_url: "/pack-my-trip/demo.mp4",
            github_button_description: "Repositorio Pack My Trip",
            github_url: "https://github.com/juanfra312003/pack-my-trip"
        },
        {
            title: "IArtificialCOL – Cofounder Automatizaciones con IA",
            description: "Empresa cofundada donde automatizamos procesos con IA, brindando eficiencia cercanas al 80%.",
            bg_image: "/iartificial-col/background.jpeg",
            long_description_1: "IArtificialCOL es una empresa que cofundé con uno de mis mejores amigos. Diseñamos e implementamos automatizaciones con IA orientadas a procesos de negocio, convirtiendo tareas manuales y repetitivas en flujos automatizados y medibles.",
            inter_image: "/iartificial-col/image-1.png",
            long_description_2: "Hemos automatizado procesos en dos empresas en Colombia, una de venta de relojes y otra de alquiler de andamios y ferretería, logrando cerca de un **80% de mejora en tiempos de respuesta y efectividad operativa**. Usamos herramientas no-code e integraciones de APIs para entregar soluciones rápidas y mantenibles.",
            project_facts: [
                "Proyecto vigente cofundado y desarrollado por un equipo de dos personas.",
                "Automatizaciones con IA construidas sobre herramientas no-code e integraciones con sistemas existentes.",
                "Flujos de atención al cliente 24/7 con resolución automática de consultas y derivación a agentes humanos cuando es necesario.",
                "Generación automática de órdenes y documentos a partir de conversaciones o formularios.",
                "Correos automáticos y recordatorios operativos para pedidos y actualizaciones clave.",
                "Agenda y citas con registro en tiempo real en bases de datos.",
                "Datos estructurados listos para futura analítica y dashboards."
            ],
            demo_title: "IArtificialCOL — Automatización de procesos empresariales",
            video_url: "/iartificial-col/demo.mp4",
            video_portrait: true,
            instagram_button_description: "Ver IArtificialCOL en Instagram",
            instagram_url: "https://www.instagram.com/iartificialcol/"
        },
        {
            title: "All Connected – Proyecto de Arquitectura de Software",
            description: "PWA para conectar organizaciones, proveedores y estudiantes mediante servicios distribuidos.",
            bg_image: "/all-connected/background.jpg",
            long_description_1: "All Connected construye un ecosistema digital que conecta comercios locales y organizaciones con estudiantes desde una única plataforma. El proyecto se desarrolló a partir de necesidades reales identificadas con usuarios y clientes institucionales.",
            inter_image: "/all-connected/image-1.png",
            long_description_2: "La solución adopta una arquitectura orientada a servicios que facilita la evolución modular y la integración con sistemas externos. Incluye back-end en Spring Boot y .NET, front-end con Next.js y un proceso de requisitos guiado por el dominio.",
            project_facts: [
                "Arquitectura orientada a servicios para la interacción entre múltiples actores.",
                "Servicios back-end implementados con Spring Boot y .NET para las funcionalidades principales.",
                "Frontend web progresivo (PWA) con Next.js y diseño responsivo para acceso multiplataforma.",
                "Modelado de dominio y decisiones arquitectónicas basadas en requisitos de un cliente real."
            ],
            github_button_description: "Repositorio All Connected",
            github_url: "https://github.com/FusionTech-2430"
        }
    ]
};


// Data for display content of our own portfolio services (Change)
export const serviceData = [
    { 
        icon: assets.mobile, 
        title: 'Mobile Development', 
    },
    { 
        icon: assets.backend, 
        title: 'Backend Development', 
    },
    { 
        icon: assets.ai_projects, 
        title: 'AI Projects', 
    },
    { 
        icon: assets.ai_automations, 
        title: 'AI Automations', 
    },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, Dart, C++, Python, Kotlin, Go, C#, R, JavaScript.' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Software Engineering & B.Tech in Data Science.' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built around 5 projects and recently began two entrepreneurial ventures.' }
];

export const getToolsData = (isDarkMode) => [
    assets.vscode, assets.firebase, assets.supabase, assets.git, isDarkMode ? assets.aws_dark : assets.aws_light, assets.docker, assets.postgres, assets.redis, assets.n8n
];

export const contactData = (isDarkMode) => [
    {
        icon: isDarkMode ? assets.github_dark : assets.github,
        title: 'GitHub',
        link: 'https://github.com/juanfra312003'
    },
    {
        icon: isDarkMode ? assets.linkedin_dark : assets.linkedin,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/juan-francisco-ramirez-escobar-575636212/'
    },
    {
        icon: isDarkMode ? assets.whatsapp_dark : assets.whatsapp,
        title: 'WhatsApp',
        link: "https://api.whatsapp.com/send?phone=573219668133&text=Hi%20Juanfra!%20I%20was%20visiting%20your%20website%20and%20I'd%20love%20to%20get%20in%20touch%20with%20you%20%F0%9F%98%8A"
    }
]
