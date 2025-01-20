import {defineField, defineType} from 'sanity';

export const devExperience = defineType({
    name: 'devExperience',
    title: 'Job Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            validation: (rule) => rule.required(),
            options: {
                dateFormat: 'MM/YYYY'
            }
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'MM/YYYY'
            }
        }),
    ],
});
