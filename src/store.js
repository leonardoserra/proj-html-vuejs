import { reactive } from 'vue';
export const store = reactive(
    {
        pageHeaderDatas: [
            {
                name: 'Courses',
                new: false
            },
            {
                name: 'Zoom',
                new: true
            },
            {
                name: 'Pages',
                new: false
            },
            {
                name: 'Bundles',
                new: false
            },
            {
                name: 'Course Format',
                new: false
            },
            {
                name: 'Add Course',
                new: true
            },
            {
                name: 'Demos',
                new: false
            }
        ],

        pageHeaderIcons: [
            'twitter',
            'instagram',
            'behance',
            'dribbble',
            'flickr',
            'git',
            'linkedin',
            'pinterest'
        ],

        jumbotronData: {
            title: 'Start Investing in You',
            paragraph: "With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you.",
            buttonText: 'JOIN FOR FREE'
        },

        jumbo2Data: {
            title: 'Limitless learning, more possibilities',
            paragraph: "Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.",
            buttonText: 'READ MORE'
        },

        featuresData: [
            {
                icon: 'earth-americas',
                title: 'Worldwide Recognize',
                text: 'Our online course certificates can be used around the world and also in most popular universities and companies.'
            },

            {
                icon: 'desktop',
                title: 'Mostly Online Learning (sd)',
                text: 'Masterstudy online certificates can be obtained in a range of specialized areas and typically take about a year to complete.'
            },

            {
                icon: 'calendar-check',
                title: 'Graduate in as little as 1 year',
                text: 'Online post-graduate certificates are a popular way to develop your professional qualifications of Masterstudy'
            }
        ],

        galleryData: [
            {
                imagePath: 'cat_1-1540x750',
                title: 'Software Development',
                coursesQuantity: '5'
            },

            {
                imagePath: 'cat_2-740x310',
                title: 'Art',
                coursesQuantity: '8'
            },

            {
                imagePath: 'cat_3-740x310',
                title: 'Material Design',
                coursesQuantity: '5'
            },

            {
                imagePath: 'cat_5-740x310',
                title: 'Music',
                coursesQuantity: '5'
            },

            {
                imagePath: 'cat_4-740x310',
                title: 'Exercise',
                coursesQuantity: '7'
            },

            {
                imagePath: 'cat_6-740x310',
                title: 'Photography',
                coursesQuantity: '4'
            }
        ],

        recentCoursesNav: [
            'All Categories',
            'Art',
            'Exercise',
            'Material Design',
            'Music',
            'Photography',
            'Software Development'
        ],

        coursesGalleryData: [
            {
                imagePath: 'photo-1461749280684-dccba630e2f6-544x322.jpeg',
                category: 'Apache',
                title: 'Web Coding and Apache Basics',
                duration: '6',
                rate: 0,
                fullPrice: '',
                price: '',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: false
            },

            {
                imagePath: 'cat_2-544x322.jpg',
                category: 'Art',
                title: 'Real Thinghs Art Painting by Jason Ni',
                duration: '6',
                rate: 0,
                fullPrice: '60',
                price: '45',
                free: true,
                featured: true,
                newPill: true,
                hotPill: false,
                specialPill: false
            },

            {
                imagePath: 'course-preview-544x322.jpg',
                category: 'Software Development',
                title: 'Basics of Masterstudy',
                duration: '',
                rate: 5,
                fullPrice: '',
                price: '',
                free: true,
                featured: false,
                newPill: false,
                hotPill: true,
                specialPill: false
            },

            {
                imagePath: 'photo-1496307042754-b4aa456c4a2d-544x322.jpeg',
                category: 'Electronic',
                title: 'How to be a DJ? Make Electronic Music',
                duration: '',
                rate: 5,
                fullPrice: '59',
                price: '49',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: true
            },

            {
                imagePath: 'photo-1416339134316-0e91dc9ded92-scaled-544x322.jpeg',
                category: 'Communication',
                title: 'Design Instruments for Communication',
                duration: '6',
                rate: 0,
                fullPrice: '',
                price: '',
                free: false,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: false
            },

            {
                imagePath: 'cathryn-lavery-67852-unsplash-544x322.jpg',
                category: 'Art',
                title: 'Make your Concept Right and Beautiful',
                duration: '6',
                rate: 0,
                fullPrice: '',
                price: '70',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: false
            },

            {
                imagePath: 'photo-1475452779376-caebfb988090-544x322.jpeg',
                category: 'Bicycling',
                title: 'Road Bike Manual or How to Be a Champion',
                duration: '6',
                rate: 0,
                fullPrice: '',
                price: '20',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: false
            },

            {
                imagePath: 'cristian-grecu-762012-unsplash-min-scaled-544x322.jpg',
                category: 'Documentary',
                title: 'How to Make Beautiful Landscape photos?',
                duration: '6',
                rate: 0,
                fullPrice: '',
                price: '60',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: false
            },

            {
                imagePath: 'landscape-544x322.jpg',
                category: 'Art',
                title: "Let's paint Van Gogh's Starry Night",
                duration: '6',
                rate: 0,
                fullPrice: '',
                price: '79',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: false
            },

            {
                imagePath: '12345-1-544x322.png',
                category: 'Nvidia',
                title: 'Nvidia and UE4 Technologies Practice',
                duration: '',
                rate: 5,
                fullPrice: '',
                price: '',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: true
            },

            {
                imagePath: 'jakob-owens-198234-unsplash-min-1-544x322.png',
                category: 'Art',
                title: 'How to Work with Legendary RED camera',
                duration: '6',
                rate: 0,
                fullPrice: '',
                price: '',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: true
            },

            {
                imagePath: 'promo_tf-544x322.jpg',
                category: 'Software Development',
                title: 'MasterStudy Mobile LMS App',
                duration: '2',
                rate: 2,
                fullPrice: '',
                price: '',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: false
            }
        ],

        coursesPopularData: [
            {
                imagePath: 'photo-1461749280684-dccba630e2f6-544x322.jpeg',
                category: 'Apache',
                title: 'Web Coding and Apache Basics',
                duration: '6',
                rate: 0,
                fullPrice: '',
                price: '',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: false
            },

            {
                imagePath: 'cat_2-544x322.jpg',
                category: 'Art',
                title: 'Real Thinghs Art Painting by Jason Ni',
                duration: '6',
                rate: 0,
                fullPrice: '60',
                price: '45',
                free: true,
                featured: true,
                newPill: true,
                hotPill: false,
                specialPill: false
            },

            {
                imagePath: 'course-preview-544x322.jpg',
                category: 'Software Development',
                title: 'Basics of Masterstudy',
                duration: '',
                rate: 5,
                fullPrice: '',
                price: '',
                free: true,
                featured: false,
                newPill: false,
                hotPill: true,
                specialPill: false
            },

            {
                imagePath: 'photo-1496307042754-b4aa456c4a2d-544x322.jpeg',
                category: 'Electronic',
                title: 'How to be a DJ? Make Electronic Music',
                duration: '',
                rate: 5,
                fullPrice: '59',
                price: '49',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: true
            },

            {
                imagePath: 'photo-1416339134316-0e91dc9ded92-scaled-544x322.jpeg',
                category: 'Communication',
                title: 'Design Instruments for Communication',
                duration: '6',
                rate: 0,
                fullPrice: '',
                price: '',
                free: false,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: false
            },

            {
                imagePath: 'cathryn-lavery-67852-unsplash-544x322.jpg',
                category: 'Art',
                title: 'Make your Concept Right and Beautiful',
                duration: '6',
                rate: 0,
                fullPrice: '',
                price: '70',
                free: true,
                featured: false,
                newPill: false,
                hotPill: false,
                specialPill: false
            }

        ],

        analyticsNumbers: [
            {
                number: '2000',
                subject: 'STUDENTS'
            },

            {
                number: '950',
                subject: 'COURSES'
            },

            {
                number: '1600',
                subject: 'HOURS VIDEO'
            },

            {
                number: '150',
                subject: 'COUNTRIES REACHED'
            }
        ]
    }

);