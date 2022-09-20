import {Editor} from "@tinymce/tinymce-react";
import {useRef, useState} from "react";

export function CustomEditor(){
    const editorRef = useRef(null);
    const [contentEditor, setContentEditor] = useState<string>('');
    const getContent=()=>{
        // todo
    }
    return <Editor
        apiKey={"ftfvmiu7c0y3xx6rji46xws717iic9iz0r6qhe59i5laop0m"}
        initialValue={contentEditor}
        onKeyUp={getContent}
        onChange={getContent}
        init={{
            height:  450,
            menubar: true,
            referrer_policy: 'origin',
            fontsize_formats:
                "8pt 9pt 10pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",
            plugins: ['table', 'image', 'media', 'link', 'code', 'preview',
                'fullscreen', 'lists'],
            toolbar: 'undo redo preview | table image media link' +
                'bold italic forecolor backcolor | alignleft aligncenter ' +
                'alignright alignjustify bullist numlist outdent | code fullscreen',
            anchor_bottom: false,
            valid_elements: '*[*]',
            extended_valid_elements: '@[itemscope|itemtype|itemprop|content,meta],*[*],script[src|async|defer|type|charset],meta,style,title',
            custom_elements: '*[*],script[charset|defer|language|src|type],style,title,@[itemscope|itemtype|itemprop|content,meta]',
            valid_children: '+body[style],+body[script]',
            verify_html: false,
            content_css: ['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'],
            anchor_top: false,
            // style for fix image equal width editor (don't show scroll horizontal)
            style_formats: [
                {
                    title: 'Imagem responsiva', selector: 'img', styles: {
                        'width': '100%',
                        'height': '100%'
                    }
                }
            ],
            content_style: `img{width:100%;object-fit:cover}`,
            media_strict: false,
            file_picker_types: 'image media',

        }}
    />
}
