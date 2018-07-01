function get() {
    alert(editor.getValue());
}
var editor = new Simditor({
    textarea: $('#editor'),
    upload:{
        url: '',
        params: null,
        fileKey: 'upload_file',
        connectionCount: 3,
        leaveConfirm: '正在上传图片!确定离开吗?'
    },
    tabIndent: true,
    toolbar: ['title',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'fontScale',
        'color',
        'ol',
        'ul',
        'blockquote',
        'code',
        'table',
        'link',
        'image',
        'hr',
        'indent',
        'outdent',
        'alignment'],
    toolbarFloat: true,
    toolbarFloatOffset: 0,
    toolbarHidden: false,
    pasteImage: true,
    cleanPaste: false
});