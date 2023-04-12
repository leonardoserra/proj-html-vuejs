import { reactive } from 'vue';
export const store = reactive(
    {
        pageHeaderDatas: [
            'Courses',
            'Zoom',
            'Pages',
            'Bundles',
            'Course Format',
            'Add Course',
            'Demos'
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
        ]
    }

);