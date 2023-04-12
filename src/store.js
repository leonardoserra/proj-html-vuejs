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

            }
        ]
    }

);