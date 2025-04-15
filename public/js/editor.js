let editor;

// Initialize Monaco Editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
require(['vs/editor/editor.main'], function() {
    editor = monaco.editor.create(document.getElementById('editor'), {
        value: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
        language: 'java',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: {
            enabled: false
        },
        fontSize: 14,
        lineNumbers: 'on',
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        cursorStyle: 'line',
        tabSize: 4,
        insertSpaces: true,
        wordWrap: 'on',
        folding: true,
        lineDecorationsWidth: 10,
        lineNumbersMinChars: 3,
        renderLineHighlight: 'all',
        scrollbar: {
            vertical: 'visible',
            horizontal: 'visible',
            useShadows: false,
            verticalScrollbarSize: 10,
            horizontalScrollbarSize: 10
        }
    });

    // Update status bar with cursor position
    editor.onDidChangeCursorPosition(function(e) {
        const position = editor.getPosition();
        const statusBar = document.querySelector('.status-item:last-child');
        statusBar.textContent = `Ln ${position.lineNumber}, Col ${position.column}`;
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        editor.layout();
    });
});

// Export editor instance
window.getEditor = () => editor; 