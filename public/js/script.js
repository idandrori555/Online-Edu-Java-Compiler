// Initialize all components when the editor is ready
document.addEventListener('DOMContentLoaded', function() {
    require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
    require(['vs/editor/editor.main'], function() {
        // Wait for editor to be initialized
        const checkEditor = setInterval(() => {
            if (window.getEditor()) {
                clearInterval(checkEditor);
                const editor = window.getEditor();
                
                // Setup keyboard shortcuts
                window.setupKeyboardShortcuts(editor);
                
                // Setup compile button (as a backup)
                window.setupCompileButton();
            }
        }, 100);
    });
});

// Remove the local compile function and compile button setup
// as they are now handled in compiler.js
