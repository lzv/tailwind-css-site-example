/* Import TinyMCE */
import tinymce from 'tinymce';

/* Default icons are required. After that, import custom icons if applicable */
import 'tinymce/icons/default/icons.min.js';

/* Required TinyMCE components */
import 'tinymce/themes/silver/theme.min.js';
import 'tinymce/models/dom/model.min.js';

/* Import the default skin (oxide). Replace with a custom skin if required. */
import 'tinymce/skins/ui/oxide/skin.js';

/* Import plugins */
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/code';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';

/* content UI CSS is required (using the default oxide skin) */
import 'tinymce/skins/ui/oxide/content.js';

/* The default content CSS can be changed or replaced with appropriate CSS for the editor content. */
import 'tinymce/skins/content/default/content.js'; // content_css: 'default'

/* Решение проблемы во время разработки с vite */
if (import.meta.env.DEV) {
    document.querySelectorAll('textarea.tinymce-editor').forEach((textarea) => {
        textarea.value = textarea.textContent;
    });
}

/* Initialize TinyMCE */
tinymce.init({
    selector: 'textarea.tinymce-editor',
    license_key: 'gpl',
    plugins: 'codesample code advlist lists table link emoticons',
    menu: { tools: { title: 'Tools', items: 'code listprops' } },
    toolbar: 'undo redo | blocks | bold italic | alignment_group | outdent indent | bullist numlist | codesample',
    toolbar_groups: {
        alignment_group: {
            icon: 'align-left',
            tooltip: 'Alignment',
            items: 'alignleft aligncenter alignright alignjustify'
        }
    },
    content_css: 'default',
    codesample_languages: [
        { text: 'HTML/XML', value: 'markup' },
        { text: 'JavaScript', value: 'javascript' },
        { text: 'CSS', value: 'css' },
        { text: 'PHP', value: 'php' },
        { text: 'Ruby', value: 'ruby' },
        { text: 'Python', value: 'python' },
        { text: 'Java', value: 'java' },
        { text: 'C', value: 'c' },
        { text: 'C#', value: 'csharp' },
        { text: 'C++', value: 'cpp' }
    ],
});
