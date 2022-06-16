import { ColumnBlock } from './classes/columnBlock';
import { ImageBlock } from './classes/imageBlock';
import { TextBlock } from './classes/textBlock';
import { TitleBlock } from './classes/titleBlock';
import * as url from '../asset/black_hole.jpg';

export const models = [
    new TitleBlock('JavaScript site constructor', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#ffh',
            'text-align': 'center', //кавычки для text-align - так как название свойства пишется через - 
            padding: '0.5'
        }
    }),
    new ImageBlock({
        src: url.default,
        alt: 'some greate animal picture'
    },
        {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center',
                height: '200px',
                width: '400px',
                overflow: 'hidden'
            }
        }),
    new ColumnBlock(
        [
            'Ut fusce varius nisl ac ipsum gravida vel pretium tellus tincidunt integer eu augue augue nunc elit dolor, luctus placerat.',
            'Scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.',
            'Placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue.'
        ],
        {
            styles: {
                background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                'font-weight': 'bold', //кавычки для text-align - так как название свойства пишется через - 
                padding: '2rem'
            }
        }
    ),
    new TextBlock(
        'Ut fusce varius nisl ac ipsum gravida vel pretium tellus tincidunt integer eu augue augue nunc elit dolor, luctus placerat.',
        {
            styles: {
                background: 'linear-gradient(to right, #f2994a, #f2c94c)',
                'font-weight': 'bold', //кавычки для text-align - так как название свойства пишется через - 
                padding: '1rem'
            }
        }
    )
];
